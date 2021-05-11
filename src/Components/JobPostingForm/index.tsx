/** @jsxImportSource @emotion/react */
import React, { FormEventHandler, MouseEventHandler } from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { Heading } from "../Heading";
import { Job } from "../JobBoardTable";
import styles from "./index.css";

export interface JobPostingFormProps extends React.HTMLAttributes<HTMLElement> {
  jobFields: JobField[];
  addJob: FormEventHandler<HTMLFormElement>;
  editJob: FormEventHandler<HTMLFormElement>;
  cancelPosting: MouseEventHandler<HTMLButtonElement>;
  isAdding: boolean;
  job?: Job;
}

export interface JobField {
  mappedField: string;
  name: string;
  helperText: string;
  placeholderText?: string;
  options?: string[]
}

export const JobPostingForm: React.FC<JobPostingFormProps> = ({
  jobFields,
  addJob,
  editJob,
  cancelPosting,
  job,
  isAdding,
  className,
}) => {

  const handleFormData = (formData: React.FormEventHandler) => {
    console.log(formData);
    const date = new Date()
    
    return {
      jobTitle: '',
      jobLocation: '',
      jobPosted: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
      jobSponsorship: 'Free',
      jobStatus: 'Closed',
      editable: true
    } as Job
  }


  return (
    <>
      <section css={styles} className={className}>
        <article className={"form-header"}>
          {isAdding ? (
            <>
              <Heading level={1}>Add a new Job</Heading>
              <Copy>Fill out the information for your new job listing.</Copy>
            </>
          ) : (
            <>
              <Heading level={1}>Edit Job</Heading>
              <Copy>Edit the information for your job listing.</Copy>
            </>
          )}
        </article>
        <article className={"form-fields"}>
          <form onSubmit={isAdding ? (e) => {addJob(handleFormData(e))} : (e) => {editJob(handleFormData(e))}}>
              {jobFields.map(jobField => {
                return (
                  <div className="">
                    <label htmlFor={jobField.mappedField}>
                      <Heading level={2}>{jobField.name}</Heading>
                      <Copy>{jobField.helperText}</Copy>
                    </label>
                    {jobField.placeholderText && (
                      <input id={`${jobField.mappedField}Input`} type={'text'} value={isAdding ? '' : job && '' } placeholder={jobField.placeholderText}></input>
                    )}
                    {jobField.options && (
                      <select value={isAdding ? '' : job && ''}>
                        {jobField.options.map(option => {
                          return (
                            <option value={option.toLowerCase()}>{option}</option>
                          )
                        })}
                      </select>
                    )

                    }
                  </div>
                );
              })}
          </form>
        </article>
        <article className={"form-buttons"}>
              <Button color={'secondary'} onClick={cancelPosting}>Cancel</Button>
              <Button color={'primary'} type={'submit'}>{isAdding ? "Add Job" : "Save" }</Button>
        </article>
      </section>
    </>
  );
};
