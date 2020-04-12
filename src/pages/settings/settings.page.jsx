import React, { Component } from "react";

import Input from "../../components/Input/Input";
import "./settings.page.scss";
import Button from "../../components/Button/Button";
import InputError from "../../components/InputError/InputError";
import { connect } from "react-redux";
import { fetchSettingsFromServer } from "../../redux/actions/settings-data";
import { updateSettings } from "../../http-calls";
import { clearBuildData } from '../../redux/actions/build-data';

const initialState = {
  formFields: {
    repositoryName: {
      value: "",
      isValid: false,
      isTouched: false,
      errorMessage: "",
      isRequired: true
    },
    buildCommand: {
      value: "",
      isValid: false,
      isTouched: false,
      errorMessage: "",
      isRequired: true
    },
    mainBranch: {
      value: "",
      isValid: false,
      isTouched: false,
      errorMessage: "",
      isRequired: false
    },
    period: {
      value: "10",
      isValid: false,
      isTouched: false,
      errorMessage: "",
      isRequired: true
    }
  },
  isFormValid: false
};

class Settings extends Component {
  state = initialState;

  componentDidMount() {
    this.props.fetchSettingsFromServer();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.settingsData) !==
      JSON.stringify(this.props.settingsData)
    ) {
      await this._initiateLoad();
    }
  }

  _resetState = () => {
    return new Promise((resolve, reject) => {
      this.setState(initialState, () => {
        resolve();
      });
    });
  };

  _resetChanges = async () => {
    await this._resetState();
    await this._initiateLoad();
    this._validateForm();
  };

  _initiateLoad = () => {
    return new Promise(async (resolve, reject) => {
      // Load data from redux
      const { settingsData } = this.props;
      const { formFields } = this.state;
      formFields.repositoryName.value = settingsData.repoName;
      formFields.buildCommand.value = settingsData.buildCommand;
      formFields.mainBranch.value = settingsData.mainBranch;
      formFields.period.value = settingsData.period.toString();
      this.setState({ formFields }, () => {
        resolve();
      });
    });
  };

  _markAsTouched = fieldName => {
    const { formFields } = this.state;
    formFields[fieldName].isTouched = true;
    this.setState({ formFields });
    this._validateForm();
  };

  _makeAllFieldAsTouched = () => {
    return new Promise((resolve, reject) => {
      const { formFields } = this.state;
      Object.keys(formFields).forEach((fieldName, index) => {
        formFields[fieldName].isTouched = true;
      });
      this.setState({ formFields }, () => {
        resolve();
      });
    });
  };

  _updateFieldValue = (fieldName, event) => {
    if (event && event.target.validity.valid) {
      const { formFields } = this.state;
      formFields[fieldName].value = event.target.value;
      this.setState({ formFields });
      if (formFields[fieldName].isTouched) {
        // Validate
        this._validateForm();
      }
    }
  };

  _resetField = fieldName => {
    const { formFields } = this.state;
    formFields[fieldName].value = "";
    this.setState({ formFields });
    if (formFields[fieldName].isTouched) {
      // Validate
      this._validateForm();
    }
  };

  _validateForm = () => {
    return new Promise((resolve, reject) => {
      const { formFields } = this.state;
      // Initially set form as valid
      let isFormValid = true;
      Object.keys(formFields).forEach((fieldName, index) => {
        const field = formFields[fieldName];
        // Initially set field as valid
        field.isValid = true;
        field.errorMessage = "";
        let isFieldValid = false;
        switch (fieldName) {
          case "repositoryName": {
            isFieldValid = this._validateField(field, field => {
              // Has value
              // Check if it's has "username/reponame" structure
              const parts = field.value.split("/");
              if (parts.length === 2 && parts[0].length && parts[1].length) {
                // It's fine
                return true;
              } else {
                // Doesn't contain proper structure
                field.isValid = false;
                field.errorMessage = "Not a valid repository";
              }
            });
            break;
          }
          default: {
            isFieldValid = this._validateField(field);
            break;
          }
        }
        if (isFormValid) {
          isFormValid = isFieldValid;
        }
      });
      this.setState({ formFields, isFormValid }, () => {
        resolve();
      });
    });
  };

  _validateField = (field, extraCheckAsCallback = null) => {
    // Check if touched
    if (field.isTouched) {
      // Touched
      // Check if it's blank
      if (!field.value || !field.value.length) {
        // Blank
        // Check if it's required
        if (field.isRequired) {
          // Required
          // Doesn't have a proper value
          field.isValid = false;
          field.errorMessage = "Cannot be blank";
          return false;
        }
      } else {
        // Has value
        // Check if extra check is passed
        if (extraCheckAsCallback) {
          return extraCheckAsCallback(field);
        }
      }
    }
    return true;
  };

  _updateSettings = async (e = null) => {
    if (e) {
      e.preventDefault();
    }
    await this._makeAllFieldAsTouched();
    await this._validateForm();
    const { isFormValid, formFields } = this.state;
    if (isFormValid) {
      const requestParams = {
        repository: formFields.repositoryName.value,
        branch: formFields.mainBranch.value,
        command: formFields.buildCommand.value,
        minutes: formFields.period.value
      };
      // Update in server
      try {
        await updateSettings(requestParams);
        this.props.fetchSettingsFromServer();
        // Delete build logs from redux
        this.props.clearBuildData();
        this._tryToGoBack();
      } catch (error) {}
    }
  };

  _tryToGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { formFields } = this.state;

    return (
      <form className="content__form" onSubmit={this._updateSettings}>
        <div className="content__title">Settings</div>
        <div className="content__sub-title color_text_thirdly">
          Configure repository connection and synchronization settings.
        </div>
        <div className="content__form-fields">
          <Input
            label="GitHub repository "
            placeholder="user-name/repo-name"
            required="input-required"
            value={formFields.repositoryName.value}
            onInput={e => this._updateFieldValue("repositoryName", e)}
            onBlur={() => this._markAsTouched("repositoryName")}
            onReset={e => this._resetField("repositoryName")}
            hideClearButton={!formFields.repositoryName.value.length}
            errorConnected={true}
            hasError={
              !formFields.repositoryName.isValid &&
              formFields.repositoryName.isTouched
            }
            errorText={formFields.repositoryName.errorMessage}
          />
          <Input
            label="Build command "
            placeholder="enter a command here"
            required="input-required"
            value={formFields.buildCommand.value}
            onInput={e => this._updateFieldValue("buildCommand", e)}
            onBlur={() => this._markAsTouched("buildCommand")}
            onReset={e => this._resetField("buildCommand")}
            hideClearButton={!formFields.buildCommand.value.length}
            errorConnected={true}
            hasError={
              !formFields.buildCommand.isValid &&
              formFields.buildCommand.isTouched
            }
            errorText={formFields.buildCommand.errorMessage}
          />
          <Input
            label="Main branch "
            placeholder="enter a main branch here"
            value={formFields.mainBranch.value}
            onInput={e => this._updateFieldValue("mainBranch", e)}
            onBlur={() => this._markAsTouched("mainBranch")}
            onReset={e => this._resetField("mainBranch")}
            hideClearButton={!formFields.mainBranch.value.length}
            errorConnected={true}
            hasError={
              !formFields.mainBranch.isValid && formFields.mainBranch.isTouched
            }
            errorText={formFields.mainBranch.errorMessage}
          />
          <Input
            label="Synchronize every "
            placeholder="10"
            width="input_width_small"
            modifierFlex="flex_row"
            afterText="minuties"
            modifierInputTheme="input_theme_big"
            type="text"
            pattern="[0-9]*"
            value={formFields.period.value}
            onInput={e => this._updateFieldValue("period", e)}
            onBlur={() => this._markAsTouched("period")}
            hideClearButton={true}
          />
          <InputError
            hasError={!formFields.period.isValid && formFields.period.isTouched}
            errorText={formFields.period.errorMessage}
          />
          <div className="content__form-buttons flex_column_mobile margin_right_8_button padding_top_bottom_8">
            <Button
              classNameModifierSize="button_size_n"
              classNameElement="button_theme_islands"
              classNameModifier="button_view_action margin_bottom_8_mobile"
              type="submit"
              name="Save"
            />
            <Button
              classNameModifierSize="button_size_n"
              classNameElement="button_theme_islands"
              classNameModifier="button_view"
              type="button"
              onClick={this._tryToGoBack}
              name="Cancel"
            />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    settingsData: state.settingsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSettingsFromServer: () => dispatch(fetchSettingsFromServer()),
    clearBuildData: () => dispatch(clearBuildData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
