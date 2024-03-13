import React from 'react';
import ReactDOM from 'react-dom';
import styles from './PopupDialog.module.css';
import { setReadingProgess } from '../../redux/LibraryActions';
import { connect, useDispatch } from 'react-redux';
import { useRef } from 'react';

const PopupDialog = ({ isOpen, onClose, id}) => {
    const progress=useRef();
    const dispatch=useDispatch();
    const onSubmit = () => {
        const progressValue = progress.current.value;
        console.log(progressValue + "hi");
        if(progressValue.length==0){
            onClose();
            return;
            
        }
        dispatch(setReadingProgess(id, progressValue));
        onClose();
    };
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <h3>Enter current page number</h3>
                <input type="number" ref={progress}></input>
                <div className={styles.popupButtons}>
                    <button onClick={onSubmit}>Submit</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>,
        document.getElementById('root')
    );
};

export default connect()( PopupDialog);
