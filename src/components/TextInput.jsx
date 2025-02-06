import "./TextInput.css";

export const TextInput = ({ id, value, onChange }) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type here..."
    />
  );
};
