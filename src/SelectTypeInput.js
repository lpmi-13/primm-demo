export const SelectTypeInput = ({
    choices,
    handleUpdate,
    prediction,
}) => {
  return (
    <select id="predict" value={prediction} className="guess" onChange={handleUpdate} name="predict">
      <option value="">--please choose an option</option>
      { choices && choices.map(choice => <option value={`${choice.answer}`}>{choice.answer}</option> )}
    </select>
  )
}