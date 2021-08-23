import React, { useState } from "react";

const useTable = (props) => {
  /*======================== Props ======================== */

  const { addData, editData, removeData } = props;

  /*======================== UseState ======================== */

  const [form, setForm] = useState({
    onEdit: false,
    editValue: {},
    onAdd: false,
    addValue: {
      name: "",
      type: "",
      location: "",
      phone: "",
      email: "",
    },
  });

  /*======================== Handler ======================== */

  const handleActions = (item, setValue) => {
    const actions = (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {form.onEdit && form.editValue.id === item.id ? (
          <React.Fragment>
            <input type="submit" value="save" />
            <button type="button" onClick={() => handleReset()}>
              Cancel
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button
              type="button"
              onClick={() => {
                setForm((prevState) => ({
                  onAdd: false,
                  addValue: {
                    name: "",
                    type: "",
                    location: "",
                    phone: "",
                    email: "",
                  },
                  onEdit: true,
                  editValue: item,
                }));
                setValue("id", item.id);
                setValue("name", item.name);
                setValue("type", item.type);
                setValue("location", item.location);
                setValue("phone", item.phone);
                setValue("email", item.email);
              }}
            >
              Edit
            </button>
            <button type="button" onClick={() => removeData(item.id)}>
              Delete
            </button>
          </React.Fragment>
        )}
      </div>
    );
    return actions;
  };

  const handleAdd = (setValue) => {
    setForm((prevState) => ({
      onAdd: true,
      addValue: {
        name: "",
        type: "",
        location: "",
        phone: "",
        email: "",
      },
      onEdit: false,
      editValue: {},
    }));
    setValue("id", "");
    setValue("name", "");
    setValue("type", "");
    setValue("location", "");
    setValue("phone", "");
    setValue("email", "");
  };

  const handleReset = () => {
    setForm((prevState) => ({
      onEdit: false,
      editValue: {},
      onAdd: false,
      addValue: {
        name: "",
        type: "",
        location: "",
        phone: "",
        email: "",
      },
    }));
  };

  const onSubmit = (data) => {
    if (form.onAdd) {
      addData(data);
    } else {
      editData(data);
    }
    setForm((prevState) => ({
      onAdd: false,
      addValue: {
        name: "",
        type: "",
        location: "",
        phone: "",
        email: "",
      },
      onEdit: false,
      editValue: {},
    }));
  };

  /*======================== Others ======================== */

  const typeOpts = ["Media Partner", "Hiring Partner", "Influencer", "Other"];

  /*======================== Return ======================== */

  return {
    form,
    handleActions,
    handleAdd,
    handleReset,
    onSubmit,
    typeOpts,
  };
};

export default useTable;
