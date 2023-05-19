import { useState } from "react";
export default function Feature({score}) {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, checkboxValue]);
      } else {
        alert('You can select a maximum of three items.');
      }
    } else {
      const updatedItems = selectedItems.filter((item) => item !== checkboxValue);
      setSelectedItems(updatedItems);
    }
  };
  const items = ['Performance', 'Stability', 'User Interface', 'Complete functionality', 'Learning materials(documentation,demos,code examples)', 'Quality support','Other Features'];
  
  if (score <=9) return null
  return (<div>
    <h6>Which of the following features do you value the most? *</h6>
    <span >Please select no more than three features</span>
    <div className='features'>
      {items.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={item}
            checked={selectedItems.includes(item)}
            onChange={handleCheckboxChange}
          />
          {item}
        </label>
      ))}
    </div>

  </div>)
}