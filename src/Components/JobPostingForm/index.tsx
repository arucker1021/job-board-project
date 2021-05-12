/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { Heading } from "../Heading";
import { Job } from "../JobBoardTable";
import styles from "./index.css";

export interface JobPostingFormProps extends React.HTMLAttributes<HTMLElement> {
  jobFields: JobField[];
  addJob: Function;
  editJob: Function;
  cancelPosting: MouseEventHandler<HTMLButtonElement>;
  isAdding: boolean;
  job?: Job;
}

export interface JobField {
  mappedField: string;
  name: string;
  helperText: string;
  placeholderText?: string;
  options?: string[];
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
  const handleFormData = (formData: React.FormEvent<HTMLFormElement>) => {
    const data = formData.currentTarget.elements as any;
    const date = new Date();

    const jobData: Job =  {
      jobTitle: data['jobTitle'].value,
      jobLocation: data['jobLocation'].value,
      jobPosted: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
      jobSponsorship: data['jobSponsorship'].value,
      jobStatus: data['jobStatus'].value,
      editable: true,
    };

    if(isAdding){
      addJob(jobData);
    }
    else {
      editJob(jobData);
    }
  };

  const jobObject = job && {...job} as any;

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
          <form
            id={"jobForm"}
            onSubmit={
              isAdding
                ? (e) => {
                    handleFormData(e);
                  }
                : (e) => {
                    handleFormData(e);
                  }
            }
          >
            {jobFields.map((jobField) => {
              return (
                <div key={`${jobField.mappedField}`} className="job-field">
                  <label htmlFor={jobField.mappedField}>
                    <Heading level={2}>{jobField.name}</Heading>
                    <Copy>{jobField.helperText}</Copy>
                  </label>
                  {jobField.placeholderText && (
                    <input
                      id={`${jobField.mappedField}`}
                      type={"text"}
                      required={true}
                      defaultValue={isAdding ? "" : jobObject && jobObject[`${jobField.mappedField}`]}
                      placeholder={jobField.placeholderText}
                    ></input>
                  )}
                  {jobField.options && (
                    <select id={jobField.mappedField} defaultValue={isAdding ? "" : jobObject && jobObject[`${jobField.mappedField}`]}>
                      {jobField.options.map((option) => {
                        return (
                          <option key={option} value={option}>{option}</option>
                        );
                      })}
                    </select>
                  )}
                </div>
              );
            })}
          </form>
        </article>
        <article className={"form-buttons"}>
          <Button color={"secondary"} onClick={cancelPosting}>
            Cancel
          </Button>
          <Button color={"primary"} type={"submit"} formId={"jobForm"}>
            {isAdding ? "Add Job" : "Save"}
          </Button>
        </article>
      </section>
    </>
  );
};
