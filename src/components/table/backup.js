import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useTable from "./useTable";

export const Table = (props) => {
  const { data, addData, editData, removeData } = props;
  const {
    form,
    handleActions,
    handleAdd,
    handleChangeInput,
    handleCancel,
    handleSave,
    onSubmit,
    typeOpts,
  } = useTable(props);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tr>
            <th>Company Name</th>
            <th>Type of Community</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th style={{ minWidth: "150px" }}>Action</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {form.onEdit && form.editValue.id === item.id ? (
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    // name="name"
                    // type="text"
                    // value={form.editValue.name}
                    // onChange={(event) => handleChangeInput("edit", event)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {form.onEdit && form.editValue.id === item.id ? (
                  <select
                    // name="type"
                    // value={form.editValue.type}
                    // onChange={(event) => handleChangeInput("edit", event)}
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
              </td>
              <td>
                {form.onEdit && form.editValue.id === item.id ? (
                  <input
                    {...register("location", {
                      required: true,
                    })}
                    // name="location"
                    // type="text"
                    // value={form.editValue.location}
                    // onChange={(event) => handleChangeInput("edit", event)}
                  />
                ) : (
                  item.location
                )}
              </td>
              <td>
                {form.onEdit && form.editValue.id === item.id ? (
                  <input
                    {...register("phone", {
                      required: true,
                    })}
                    // name="phone"
                    // type="text"
                    // value={form.editValue.phone}
                    // onChange={(event) => handleChangeInput("edit", event)}
                  />
                ) : (
                  item.phone
                )}
              </td>
              <td>
                {form.onEdit && form.editValue.id === item.id ? (
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    // name="email"
                    // type="text"
                    // value={form.editValue.email}
                    // onChange={(event) => handleChangeInput("edit", event)}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>{handleActions(item)}</td>
            </tr>
          ))}
          {(form.onAdd || data.length < 1) && (
            <tr>
              <td>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  // name="name"
                  // type="text"
                  // value={form.addValue.name}
                  // onChange={(event) => handleChangeInput("add", event)}
                />
              </td>
              <td>
                <select
                  // name="type"
                  // value={form.addValue.type}
                  // onChange={(event) => handleChangeInput("add", event)}
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
              </td>
              <td>
                <input
                  {...register("location", {
                    required: true,
                  })}
                  // name="location"
                  // type="text"
                  // value={form.addValue.location}
                  // onChange={(event) => handleChangeInput("add", event)}
                />
              </td>
              <td>
                <input
                  // name="phone"
                  // type="text"
                  // value={form.addValue.phone}
                  // onChange={(event) => handleChangeInput("add", event)}
                  {...register("phone", {
                    required: true,
                  })}
                />
              </td>
              <td>
                <input
                  {...register("email", {
                    required: true,
                    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                  })}
                  // name="email"
                  // type="text"
                  // value={form.addValue.email}
                  // onChange={(event) => handleChangeInput("add", event)}
                />
              </td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                {/* <button onClick={() => handleSave("add")}>Save</button> */}
                <input type="submit" value="Save" />
                {data.length > 0 && (
                  <button onClick={() => handleCancel("add")}>Cancel</button>
                )}
              </td>
            </tr>
          )}
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
          <button disabled={form.onEdit} onClick={handleAdd}>
            Add community
          </button>
        </div>
      )}
    </div>
  );
};
