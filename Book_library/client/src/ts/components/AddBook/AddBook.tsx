import React, { FC, useState } from 'react';
import './addbook.scss';

const AddBookInner: FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const authorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  }
  const yearHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  }
  const descriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  }
 
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];

    const base64 = (files: File) =>
    new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = () => resolve(reader.result);
    });
    const urlImage = await base64(file);
    if (urlImage) {
      setImageSrc(urlImage as string)
    }
  }

  const handlerAddBook = async () => {
  
    
  }

  return (
    <div className='addbook'>
      <div className="addbook__inputs">
        <div className="inputs__item">
          <input
            onChange={titleHandler}
            value={title}
            className='inputs__item__name' type="text" name="inputs__item__name"  />
          <label className='inputs__item__label' htmlFor="inputs__item__name">Title:</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={authorHandler}
            value={author}
            className='inputs__item__name' type="text" name="inputs__item__name"  />
          <label className='inputs__item__label' htmlFor="inputs__item__name">Author</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={yearHandler}
            value={year}
            className='inputs__item__name' type="text" name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Year of publication:</label>
        </div>
        <div className="inputs__item">
          <textarea
            onChange={descriptionHandler}
            value={description}
            className='inputs__item__textarea'
            rows={8}
            name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Description:</label>
        </div>
        <div className="inputs__files">
          <div className="inputs__files_block">
            <div className="inputs__files__title">
              Book cover:
            </div>
            <input
              onChange={imageHandler}
              className='inputs__files_display' type="file" name="label_for_file" id="label_for_file" />
            <label className='inputs__files__label' htmlFor="label_for_file">Select file</label>
          </div>
          <div className="inputs__files__view">
            <img  className='inputs__files__view_img' src={imageSrc}/>
          </div>
        </div>
      </div>
      <div className='addbook__button'>
        <button
          onClick={handlerAddBook}
          className='addbook__button_add'
        >
          Add book
        </button>
      </div>
    </div>
    
  );
};

export const AddBook = React.memo(AddBookInner);
