import React, { Component } from "react";
import Modal from 'react-awesome-modal';
import "./BuildModal.scss";
import Input from '../Input/Input';
import Button from '../Button/Button';
import { addToBuildQueue } from "../../http-calls";
import { EventEmitter } from "../../helper-methods";
import InputError from '../InputError/InputError';

const initialState = {
  commitHash: "",
  isTouched: false
}

class BuildModal extends Component {
  state = initialState;

  _updateCommitHash = commitHash => {
    this.setState({ commitHash, isTouched: false });
  }

  _markFieldAsTouched = () => {
    this.setState({ isTouched: true });
  }

  _resetState = () => {
    this.setState(initialState);
  }


  _addToBuildQueue = async e => {
    if(e) {
      e.preventDefault()
    }
    const { commitHash } = this.state;
    const { onHide } = this.props;
    if (commitHash && commitHash.length) {
      // Send request to server to add the build
      try {
        await addToBuildQueue(commitHash);
        // Trigger build history refresh event
        EventEmitter.dispatch("onBuildHistoryRefresh");
        this._resetState();
        // Hide modal 
        this._closeModal();
      } catch (error) {
        // Failed to add in queue
      }
    }
  }

  _closeModal = () => {
    this._resetState();
    this.props.onHide();
  }

  render() {
		const { isVisible } = this.props;
		const { commitHash, isTouched } = this.state;
    
    return (
      <Modal
        visible={isVisible}
        width="500"
        height="230"
        effect="fadeInUp"
        onClickAway={this._closeModal}
      >
        <div id="build__modal__inner__wrapper">
				<form className='content__form' onSubmit={this._addToBuildQueue}>
        <div className='content__title'>New Build</div>
        <div className='content__form-fields'>
          <Input
            label='Enter the commit hash which you want to build'
            placeholder='Commit Hash'
            required='input-required'
            value={commitHash}
            onInput={e => this._updateCommitHash(e.target.value)}
            onReset={e => this._updateCommitHash("")}
            onBlur={e => this._markFieldAsTouched()}
            hideClearButton={!commitHash.length}
          />
          <InputError 
            hasError={!commitHash.length && isTouched} 
            errorText={"Cannot be blank"} 
          />
          <div className='content__form-buttons flex_column_mobile margin_right_8_button padding_top_bottom_8'>
            <Button
              classNameModifierSize='button_size_n'
              classNameElement='button_theme_islands'
              classNameModifier='button_view_action margin_bottom_8_mobile'
              type="submit"
              name='Run Build'
            />
            <Button
              classNameModifierSize='button_size_n'
              classNameElement='button_theme_islands'
              classNameModifier='button_view'
              type="button"
              onClick={this._closeModal}
              name='Cancel'
            />
          </div>
        </div>
      </form>
        </div>
      </Modal>
    );
  }
}

export default BuildModal;
