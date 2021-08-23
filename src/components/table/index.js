import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useTable from "./useTable";

export const Table = (props) => {
  const { data, addData, editData, removeData } = props;
  const { form, handleActions, handleAdd, handleReset, onSubmit, typeOpts } =
    useTable(props);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Type of Community</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th style={{ minWidth: "150px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  {form.onEdit && form.editValue.id === item.id ? (
                    <React.Fragment>
                      <input
                        className={`${
                          form.onEdit &&
                          form.editValue.id === item.id &&
                          errors?.name &&
                          "error"
                        }`}
                        {...register("name", {
                          required: true,
                        })}
                      />
                      {form.onEdit &&
                        form.editValue.id === item.id &&
                        errors?.name?.type === "required" && (
                          <p className="error-label">This field is required</p>
                        )}
                    </React.Fragment>
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {form.onEdit && form.editValue.id === item.id ? (
                    <select
                      className={`type-select${
                        form.onEdit &&
                        form.editValue.id === item.id &&
                        errors?.type &&
                        " error"
                      }`}
                      {...register("type", {
                        required: true,
                      })}
                    >
                      <option value="">Select type</option>
                      {typeOpts.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  ) : (
                    item.type
                  )}
                  {form.onEdit &&
                    form.editValue.id === item.id &&
                    errors?.type?.type === "required" && (
                      <p className="error-label">This field is required</p>
                    )}
                </td>
                <td>
                  {form.onEdit && form.editValue.id === item.id ? (
                    <input
                      className={`${
                        form.onEdit &&
                        form.editValue.id === item.id &&
                        errors?.location &&
                        "error"
                      }`}
                      {...register("location", {
                        required: true,
                      })}
                    />
                  ) : (
                    item.location
                  )}
                  {form.onEdit &&
                    form.editValue.id === item.id &&
                    errors?.location?.type === "required" && (
                      <p className="error-label">This field is required</p>
                    )}
                </td>
                <td>
                  {form.onEdit && form.editValue.id === item.id ? (
                    <input
                      className={`${
                        form.onEdit &&
                        form.editValue.id === item.id &&
                        errors?.phone &&
                        "error"
                      }`}
                      {...register("phone", {
                        required: true,
                        pattern:
                          /(\()?(\+62|62|0)(\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/i,
                      })}
                    />
                  ) : (
                    item.phone
                  )}
                  {form.onEdit &&
                    form.editValue.id === item.id &&
                    errors?.phone?.type === "required" && (
                      <p className="error-label">This field is required</p>
                    )}
                  {form.onEdit &&
                    form.editValue.id === item.id &&
                    errors?.phone?.type === "pattern" && (
                      <p className="error-label">Need correct phone number</p>
                    )}
                </td>
                <td>
                  {form.onEdit && form.editValue.id === item.id ? (
                    <input
                      className={`${
                        form.onEdit &&
                        form.editValue.id === item.id &&
                        errors?.email &&
                        "error"
                      }`}
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                  ) : (
                    item.email
                  )}
                  {form.onEdit &&
                    form.editValue.id === item.id &&
                    errors?.email?.type === "required" && (
                      <p className="error-label">This field is required</p>
                    )}
                </td>
                <td>{handleActions(item, setValue)}</td>
              </tr>
            ))}
            {(form.onAdd || data.length < 1) && (
              <tr>
                <td>
                  <input
                    className={`${
                      (form.onAdd || data.length < 1) && errors?.name && "error"
                    }`}
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors?.name?.type === "required" && (
                    <p className="error-label">This field is required</p>
                  )}
                </td>
                <td>
                  <select
                    {...register("type", {
                      required: true,
                    })}
                  >
                    <option value="">Select type</option>
                    {typeOpts.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors?.type?.type === "required" && (
                    <p className="error-label">This field is required</p>
                  )}
                </td>
                <td>
                  <input
                    className={`${
                      (form.onAdd || data.length < 1) &&
                      errors?.location &&
                      "error"
                    }`}
                    {...register("location", {
                      required: true,
                    })}
                  />
                  {errors?.location?.type === "required" && (
                    <p className="error-label">This field is required</p>
                  )}
                </td>
                <td>
                  <input
                    className={`${
                      (form.onAdd || data.length < 1) &&
                      errors?.phone &&
                      "error"
                    }`}
                    {...register("phone", {
                      required: true,
                      pattern:
                        /(\()?(\+62|62|0)(\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/i,
                    })}
                  />
                  {errors?.phone?.type === "required" && (
                    <p className="error-label">This field is required</p>
                  )}
                  {errors?.phone?.type === "pattern" && (
                    <p className="error-label">Need correct phone number</p>
                  )}
                </td>
                <td>
                  <input
                    className={`${
                      (form.onAdd || data.length < 1) &&
                      errors?.email &&
                      "error"
                    }`}
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors?.email?.type === "required" && (
                    <p className="error-label">This field is required</p>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <p className="error-label">Need correct email</p>
                  )}
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <input type="submit" value="Save" />
                  {data.length > 0 && (
                    <button type="button" onClick={handleReset}>
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
      {data.length > 0 && (
        <div
          style={{
            margin: "2em 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button disabled={form.onEdit || form.onAdd} onClick={() => handleAdd(setValue)}>
            Add community
          </button>
        </div>
      )}
    </div>
  );
};
