// /**
//  * @desc: Generic components for the inputs.
//  */

// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
// import _ from 'lodash';
// import Checkbox from 'material-ui/Checkbox';
// import ColorPicker from 'material-ui-color-picker';
// import DatePicker from 'material-ui/DatePicker';
// import FlatButton from 'material-ui/FlatButton/FlatButton';
// import MaterialSelectField from 'mui-selectfield-search';
// // import MaterialSelectField from 'material-ui-selectfield';
// import MenuItem from 'material-ui/MenuItem';
// import React from 'react';
// import SelectField from 'material-ui/SelectField';
// import TextField from 'material-ui/TextField';
// import AutoComplete from 'material-ui/AutoComplete'; // Generic autocomplete MUI
// import TimePicker from 'material-ui/TimePicker';
// import Toggle from 'material-ui/Toggle';

// // created by Lovepreet Singh on 23-Jan-2018
// // dynamic method for comma seperated list
// const displayCommaSeperatedList = (items) => {
//   let firstElements = '';
//   let secondElements = '';
//   for (let i = 0; i < items.length; i++) {
//     if (items.length === 1) {
//       return (<div> {items[0].label}</div>);
//     } else {
//       for (let j = 0; j < items.length - 1; j++) {
//         firstElements = `${items[j].label}, `;
//         secondElements = secondElements + firstElements;
//       }
//       return (<div>{`${secondElements}${items[items.length - 1].label}`}</div>);
//     }

//   }
// };
// export const renderToggleButton = ({
//   input,
//   name,
//   label,
//   fullWidth,
//   defaultToggled,
//   className,
//   toggled,
//   meta: { touched, error },
//   onChange,
//   thumbStyle,
//   trackStyle,
//   thumbSwitchedStyle,
//   trackSwitchedStyle,
//   ...props
// }) => {
//   return (
//     <Toggle
//       name={name}
//       label={label}
//       className={className}
//       thumbStyle={thumbStyle}
//       trackStyle={trackStyle}
//       thumbSwitchedStyle={thumbSwitchedStyle}
//       trackSwitchedStyle={trackSwitchedStyle}
//       defaultToggled={defaultToggled}
//       toggled={toggled}
//       onToggle={(value) => input.onChange(value)}
//       labelPosition="right"
//       {...props}
//     />
//   );
// };

// export const renderColorPicker = ({
//   input,
//   name,
//   fullWidth,
//   defaultValue,
//   meta: { touched, error },
//   floatingLabelText,
//   handleChange,
//   className,
// }) => {
//   return (
//     <ColorPicker
//       name={name}
//       className={className}
//       fullWidth={true}
//       defaultValue={defaultValue}
//       floatingLabelText={floatingLabelText}
//       onChange={(color) => input.onChange(color)}
//     />
//   );
// };

// export const renderTextField = ({
//   input,
//   label,
//   id,
//   multiLine,
//   rowsMax,
//   fullWidth,
//   disabled,
//   defaultValue,
//   onChange,
//   maxLength,
//   loader,
//   meta: { touched, error },
//   customError,
//   autoFocus,
//   ...custom
// }) => {
//   return (
//     <TextField
//       id={id}
//       defaultValue={defaultValue}
//       autoFocus={autoFocus}
//       floatingLabelText={label}
//       errorText={touched && (error || customError)}
//       multiLine={multiLine}
//       rowsMax={rowsMax}
//       disabled={disabled}
//       fullWidth={true}
//       className="valuefont"
//       autoComplete={'off'}
//       onChange={(event) => onChange}
//       maxLength={maxLength}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}
//       {...input}
//       {...custom}
//     />
//   );
// };


// export const renderTextArea = ({
//   input,
//   label,
//   fullWidth,
//   disabled,
//   autoHeight,
//   meta: { touched, error },
//   ...custom
// }) => {
//   return (
//     <TextField
//       floatingLabelText={label}
//       errorText={touched && error}
//       multiLine={true}
//       rows={3}
//       rowsMax={autoHeight ? null : 3}
//       disabled={disabled}
//       fullWidth={true}
//       className="valuefont"
//       autoComplete={'off'}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}
//       {...input}
//       {...custom} />
//   );
// };
// const stylesRadio = {
//   block: {
//     maxWidth: 250,
//   },
//   radioButton: {
//     marginBottom: 16,
//   },
// };

// const renderRadioOptions = (options, disabled) => {
//   if (options) {
//     return options.map(function(obj) {
//       return <RadioButton
//         key={obj.id}
//         value={obj.id}
//         label={obj.value}
//         disabled={disabled}
//         style={stylesRadio.radioButton} />;
//     });
//   }
// };

// export const renderRadioButtons = ({
//   input,
//   name,
//   label,
//   options,
//   meta: { touched, error },
//   children,
//   disabled,
//   selectedValue,
//   ...custom
// }) => {
//   return (
//     <RadioButtonGroup {...input} name={name ? name : ''} defaultSelected={selectedValue}>
//       {renderRadioOptions(options, disabled)}
//     </RadioButtonGroup>
//   );
// };
// // customized radio buttons for proper functioning ...
// export const renderCustomRadioButtons = ({
//   input,
//   name,
//   label,
//   options,
//   meta: { touched, error },
//   children,
//   disabled,
//   selectedValue,
//   ...custom
// }) => {
//   return (
//     <RadioButtonGroup
//       {...input}
//       name={name}
//       onChange={(e, value) => input.onChange(value)}
//       valueSelected={selectedValue}>
//       {renderRadioOptions(options, disabled)}
//     </RadioButtonGroup>
//   );
// };

// export const renderRadioButton = ({
//   input,
//   name,
//   value,
//   label,
//   checked,
//   meta: { touched, error, warning },
// }) => {
//   return (
//     <RadioButton {...input}
//       name={name}
//       value={value}
//       label={label}
//       checked={input.value ? true : false}
//       onCheck={input.onChange}
//       style={stylesRadio.radioButton} />
//   );
// };

// const stylesCheckbox = {
//   block: {
//     maxWidth: 250,
//   },
//   checkbox: {
//     marginBottom: 16,
//   },
// };
// export const renderCheckBox = ({ input, defaultChecked, value, name, label, checked, onChange, className, disabled }) => {
//   return <Checkbox {...input}
//     name={name}
//     type="checkbox"
//     value={input.name}
//     className={className ? className : 'custm_check'}
//     label={label}
//     checked={input.value || checked ? true : false}
//     onCheck={input.onChange}
//     style={stylesCheckbox.checkbox}
//     disabled={disabled ? disabled : false}
//     defaultChecked={defaultChecked} />;
// };
// export const renderCheckBoxes = ({ input, onChange, className, options }) => {
//   return <span>{options.length > 0 ? options.map(function(obj) {
//     return <Checkbox {...input}
//       key={obj.id}
//       name={obj.id}
//       type="checkbox"
//       className={className ? className : 'custm_check'}
//       label={obj.value}
//       checked={input.value ? true : false}
//       onCheck={input.onChange}
//       style={stylesCheckbox.checkbox} />;
//   }) : ''}</span>;
// };

// /**
//  * @desc Single Select No Async. - selectfield without search
//  * @param {*} param
//  */
// export const renderAutoCompleteSingleSelect_WithoutSearch = ({
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   hintText,
//   disabled,
//   openOnFocus, customError,
//   ...custom
// }) => {
//   let sourceArr = [];
//   if (options && options.length) {
//     options.map((obj) => {
//       sourceArr[obj.id] = obj.value;
//       return sourceArr;
//     });
//   }

//   let optionsList = [];
//   if (options && options.length) {
//     if (label === 'Default Location') {
//       optionsList = options.map(({ id, locationName }) => (
//         <MenuItem key={id} value={id} primaryText={locationName} />
//       ));

//     } else {
//       optionsList = options.map(({ id, value }) => (
//         <MenuItem key={id} value={id} label={value ? value.charAt(0).toUpperCase() + value.slice(1) : ''} primaryText={value ? value.charAt(0).toUpperCase() + value.slice(1) : ''} />
//       ));
//     }
//   }
//   let selectedObj = null;
//   if (typeof input === 'object') {
//     if (options && options.length) {
//       options.map((i) => {
//         if (i.id === input.value) {
//           selectedObj = { 'value': '', 'label': '' };
//           selectedObj['value'] = i.id;
//           selectedObj['label'] = label === 'Default Location' ? i.locationName : i.value.charAt(0).toUpperCase() + i.value.slice(1);
//         }
//         return selectedObj;
//       });
//     }
//   }
//   const changeSelectedObj = (e, index, selectedValueAsFieldId) => {
//     e.preventDefault();
//     if (selectedValueAsFieldId === null) { //  Remove selection
//       selectedObj = { 'value': '', 'label': '' };
//       handleNewRequest(input, selectedObj);
//     } else { // Apply Selection
//       let selectedValueArr = options.find((o) => o.id === selectedValueAsFieldId);
//       selectedObj = { 'value': selectedValueArr.id, 'label': selectedValueArr.value }; // selectedValueAsFieldId;
//       handleNewRequest(input, selectedObj);
//     }
//   };
//   return (
//     <SelectField
//       floatingLabelText={label}
//       value={selectedObj ? selectedObj.value : null}
//       onChange={(e, index, value) => changeSelectedObj(e, index, value)}>
//       <MenuItem value={null} primaryText="" />
//       {optionsList}
//     </SelectField>
//   );
// };

// /**
//  * @desc Single Select No Async. - selectfield with search
//  * @param {*} param
//  */
// export const renderAutoCompleteSingleSelect = ({
  
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   hintText,
//   disabled,
//   openOnFocus, customError,
//   ...custom
// }) => {
  
//   let sourceArr = [];
//   if (options && options.length) {
//     debugger;
//     options.map((obj) => {
//       sourceArr[obj.id] = obj.securityQuestion;
//       return sourceArr;
//     });
//   }
//   debugger;
//   let optionsList = [];
//   if (options && options.length) {
//     if (label === 'Default Location') {
//       optionsList = options.map(({ id, locationName }) => (
//         <div key={id} value={id} label={locationName}>
//           {locationName}
//         </div>
//       ));

//     } else {
//       debugger
//       optionsList = options.map(({ id, value }) => (
//         <div key={id} value={id} label={value ? value.charAt(0).toUpperCase() + value.slice(1) : ''}>
//           {value ? value.charAt(0).toUpperCase() + value.slice(1) : ''}
//         </div>
//       ));
//     }
//   }debugger;
//   let selectedObj = null;
//   if (typeof input === 'object') {
//     if (options && options.length) {
//       // if (options.length === 1) {
//       //   selectedObj = { 'value': '', 'label': '' };
//       //   selectedObj['value'] = options[0].id;
//       //   selectedObj['label'] = label === 'Default Location' ? options[0].locationName : options[0].value.charAt(0).toUpperCase() + options[0].value.slice(1);
//       // } else {
//       options.map((i) => {
//         if (i.id === input.value) {
//           selectedObj = { 'value': '', 'label': '' };
//           selectedObj['value'] = i.id;
//           selectedObj['label'] = label === 'Default Location' ? i.locationName : i.value.charAt(0).toUpperCase() + i.value.slice(1);
//         }
//         return selectedObj;
//       });
//     }
//   }
//   const changeSelectedObj = (selectedValue) => {
//     if (selectedValue === null) { //  Remove selection
//       selectedObj = { 'value': '', 'label': '' };
//       handleNewRequest(input, selectedObj);
//     } else { // Apply Selection
//       selectedObj = selectedValue;
//       handleNewRequest(input, selectedValue);
//     }
//   };

//   return (
//     <MaterialSelectField
//       disabled={disabled ? disabled : false}
//       showAutocompleteThreshold={1}
//       errorText={touched && (error || customError)}
//       floatingLabel={label}
//       hintText={hintText}
//       floatingLabelStyle={{ color: 'rgb(122, 122, 122)' }}
//       value={selectedObj}
//       nb2show={7}
//       openOnFocus={openOnFocus}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       required={true}
//       onChange={(e) => changeSelectedObj(e)}
//       hoverColor='rgba(3, 169, 244, 0.15)'
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };
// export const renderAutoCompleteSingleSelectForColor = ({
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   hintText,
//   disabled,
//   openOnFocus, customError,
//   ...custom
// }) => {
//   let sourceArr = [];
//   if (options && options.length) {
//     options.map((obj) => {
//       sourceArr[obj.id] = obj.value;
//       return sourceArr;
//     });
//   }

//   let optionsList = [];
//   if (options && options.length) {
//     if (label === 'Default Location') {
//       optionsList = options.map(({ id, locationName }) => (
//         <div key={id} value={id} label={locationName}>
//           {locationName}
//         </div>
//       ));

//     } else {
//       optionsList = options.map(({ id, value, colorCode }) => (
//         <div key={id} value={id} label={value ? value.charAt(0).toUpperCase() + value.slice(1) : ''} style= {{ color: colorCode }}>
//           {value ? value.charAt(0).toUpperCase() + value.slice(1) : ''}
//         </div>
//       ));
//     }
//   }
//   let selectedObj = null;
//   if (typeof input === 'object') {
//     if (options && options.length) {
//       // if (options.length === 1) {
//       //   selectedObj = { 'value': '', 'label': '' };
//       //   selectedObj['value'] = options[0].id;
//       //   selectedObj['label'] = label === 'Default Location' ? options[0].locationName : options[0].value.charAt(0).toUpperCase() + options[0].value.slice(1);
//       // } else {
//       options.map((i) => {
//         if (i.id === input.value) {
//           selectedObj = { 'value': '', 'label': '' };
//           selectedObj['value'] = i.id;
//           selectedObj['label'] = label === 'Default Location' ? i.locationName : i.value.charAt(0).toUpperCase() + i.value.slice(1);
//         }
//         return selectedObj;
//       });

//     }
//   }
//   const changeSelectedObj = (selectedValue) => {
//     if (selectedValue === null) { //  Remove selection
//       selectedObj = { 'value': '', 'label': '' };
//       handleNewRequest(input, selectedObj);
//     } else { // Apply Selection
//       selectedObj = selectedValue;
//       handleNewRequest(input, selectedValue);
//     }
//   };

//   return (
//     <MaterialSelectField
//       disabled={disabled ? disabled : false}
//       showAutocompleteThreshold={1}
//       errorText={touched && (error || customError)}
//       floatingLabel={label}
//       hintText={hintText}
//       floatingLabelStyle={{ color: 'rgb(122, 122, 122)' }}
//       value={selectedObj}
//       nb2show={7}
//       openOnFocus={openOnFocus}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       required={true}
//       onChange={(e) => changeSelectedObj(e)}
//       hoverColor='rgba(3, 169, 244, 0.15)'
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };

// // Single Autocomplete Select Asynchronous (searching...).
// export const renderAutoCompleteSingleSelectAsync = ({
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   disabled,
//   ...custom
// }) => {

//   let optionsList = [];
//   if (options && options.length) {
//     optionsList = options.map(({ id, value }) => (
//       <div key={id} value={id} label={value}>
//         {value}
//       </div>
//     ));
//   }

//   let selectedObj = null;
//   if (typeof input === 'object') {
//     if (options && options.length) {
//       options.map((i) => {
//         if (i.id === input.value) {
//           selectedObj = { 'value': '', 'label': '' };
//           selectedObj['value'] = i.id;
//           selectedObj['label'] = i.value;
//         }
//         return selectedObj;
//       });
//     }
//   }

//   const changeSelectedObj = (selectedValue) => {
//     if (selectedValue === null) { //  Remove selection
//       selectedObj = { 'value': '', 'label': '' };
//       handleNewRequest(input, selectedObj);
//     } else { // Apply Selection
//       selectedObj = selectedValue;
//       handleNewRequest(input, selectedValue);
//     }
//   };

//   const makeApicall = (searchText) => {
//     handleUpdateInput(searchText, selectedObj);
//   };

//   return (
//     <MaterialSelectField
//       disabled={disabled ? disabled : false}
//       showAutocompleteThreshold={0}
//       errorText={touched && error}
//       floatingLabel={label}
//       floatingLabelStyle={{ color: 'rgb(122, 122, 122)' }}
//       value={selectedObj}
//       nb2show={7}
//       onAutoCompleteTyping={makeApicall}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       required={true}
//       onChange={(e) => changeSelectedObj(e)}
//       hoverColor='rgba(3, 169, 244, 0.15)'
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };

// // Single Select Location for header No Async
// export const renderAutoCompleteSingleSelectHeader = ({
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   disabled,
//   ...custom
// }) => {
//   let sourceArr = [];
//   if (options && options.length) {
//     options.map((obj) => {
//       sourceArr[obj.id] = obj.value;
//       return sourceArr;
//     });
//   }
//   let optionsList;
//   if (options && options.length) {
//     if (label === 'Location') {
//       optionsList = options.map(({ id, locationName }) => (
//         <div key={id} value={id} label={locationName} title={locationName}>
//           {(locationName || '').length > 16 ? (locationName || '').substring(16, 0) + '...' : locationName}
//         </div>
//       ));
//     } else {
//       optionsList = options.map(({ id, value }) => (
//         <div key={id} value={id} label={value}>
//           {value}
//         </div>
//       ));
//     }
//   }
//   let selectedObj = { value: '', label: '' };
//   if (typeof input === 'object') {
//     if (options && options.length) {
//       options.map((i) => {
//         if (i.id === input.value) {
//           selectedObj['value'] = i.id;
//           selectedObj['label'] = label === 'Location' ? i.locationName : i.value;
//         }
//         return selectedObj;
//       });
//     }
//   }
//   const changeSelectedObj = (selectedValue) => {
//     if (!selectedValue) {
//       selectedValue = selectedObj;
//       handleNewRequest(input, selectedValue);
//     } else {
//       selectedObj = selectedValue;
//       handleNewRequest(input, selectedValue);
//     }
//   };
//   const handleCustomDisplaySelections = (item) => {
//     return (
//       <div title={item.label}>
//         {(item.label || '').length > 18 ? (item.label || '').substring(18, 0) + '...' : item.label}
//       </div>
//     );
//   };
//   return (
//     <MaterialSelectField
//       disabled={disabled ? disabled : false}
//       showAutocompleteThreshold={1}
//       errorText={touched && error}
//       hintText={label}
//       nb2show={4}
//       value={selectedObj}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       required={true}
//       selectionsRenderer={handleCustomDisplaySelections}
//       onChange={(e) => changeSelectedObj(e)}
//       hoverColor='rgba(3, 169, 244, 0.15)'
//       menuCloseButton={<FlatButton label='close' />}
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };
// export const renderAutoCompleteSingleSelectLocation = ({
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   openOnFocus,
//   handleNewRequest,
//   options,
//   disabled,
//   ...custom
// }) => {
//   let sourceArr = [];
//   if (options && options.length) {
//     options.map((obj) => {
//       sourceArr[obj.id] = obj.value;
//       return sourceArr;
//     });
//   }

//   let optionsList;

//   if (label === 'Location') {
//     optionsList = options && options.length ? options.map(({ id, locationName }) => (
//       <div key={id} value={id} label={locationName}>
//         {locationName}
//       </div>
//     )) : '';
//   } else {
//     optionsList = options && options.length ? options.map(({ id, value }) => (
//       <div key={id} value={id} label={value}>
//         {value}
//       </div>
//     )) : '';
//   }
//   let selectedObj = null;
//   if (typeof input === 'object') {
//     if (options && options.length) {
//       options.map((i) => {
//         if (i.id === input.value) {
//           selectedObj = { 'value': '', 'label': '' };
//           selectedObj['value'] = i.id;
//           selectedObj['label'] = label === 'Location' ? i.locationName : i.value;
//         }
//         return selectedObj;
//       });
//     }
//   }
//   const changeSelectedObj = (selectedValue) => {
//     if (!selectedValue) {
//       selectedValue = selectedObj;
//       handleNewRequest(input, selectedValue);
//     } else {
//       selectedObj = selectedValue;
//       handleNewRequest(input, selectedValue);
//     }
//   };
//   return (
//     <MaterialSelectField
//       disabled={disabled ? disabled : false}
//       showAutocompleteThreshold={1}
//       errorText={touched && error}
//       floatingLabel={label}
//       // hintText = {hintText}
//       floatingLabelStyle={{ color: 'rgb(122, 122, 122)' }}
//       value={selectedObj}
//       nb2show={4}
//       openOnFocus={openOnFocus}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       required={true}
//       onChange={(e) => changeSelectedObj(e)}
//       hoverColor='rgba(3, 169, 244, 0.15)'
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };


// // render MultiSelection Fields for multiple items ...
// export const renderAutoCompleteMultipleSelection = ({
//   input,
//   label,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   className,
//   disabled,
//   customError,
//   ...custom
// }) => {

//   let optionsList = [];
//   let defaultSelected = [];


//   if (options && options.length) {
//     if (label === 'Location') {
//       optionsList = options.map(({ id, locationName }) => {
//         if (input.value.length) {
//           input.value.map((selected) => {
//             if (selected === id) {
//               defaultSelected.push({
//                 label: locationName,
//                 value: id,
//               });
//             }
//             return defaultSelected;
//           });
//         }
//         return (<div key={id} value={id} label={locationName}>
//           {locationName}
//         </div>
//         );
//       });
//     } else {
//       optionsList = options.map(({ id, value }) => {
//         if (input.value.length) {
//           input.value.map((selected) => {
//             if (selected === id) {
//               defaultSelected.push({
//                 label: value,
//                 value: id,
//               });
//             }
//             return defaultSelected;
//           });
//         }
//         return (
//           <div key={id} value={id} label={value}>
//             {value}
//           </div>
//         );
//       });
//     }
//   }

//   // let selectedArr = [];

//   const handleOnChange = (selectedValue, name, val) => {
//     let selectedData = [];
//     let values = [];
//     selectedValue.map((allValues, i) => {
//       values.push(allValues.value);
//       return values;
//     });
//     options.filter((op) => {
//       selectedValue.map((selected) => {
//         if (selected.value === op.id) {
//           selectedData.push(op);
//         }
//         return selectedData;
//       });
//       return selectedData;
//     });
//     handleNewRequest ? handleNewRequest(input, values, '', label, selectedData) : input.onChange(values);
//   };

//   const handleCustomDisplaySelections = (items) => {
//     return (
//       <div>
//         {(items.length && (items.length >= 2)) ?
//           <div>
//             {items.length === options.length ?
//               <div> All Selected</div> :
//               <div> {items.length} Values Selected </div>
//             }
//           </div>
//           :
//           <div>
//             {items.length && items.length <= 5 ?
//               displayCommaSeperatedList(items) :
//               <div>Select {label}</div>
//             }
//           </div>
//         }
//       </div>
//     );
//   };

//   const makeApicall = (searchData) => {
//     handleNewRequest(input, defaultSelected, searchData, label);
//   };
//   return (
//     <MaterialSelectField
//       showAutocompleteThreshold={1}
//       disabled={disabled ? disabled : false}
//       floatingLabel={label}
//       multiple={true}
//       checkPosition="left"
//       errorText={touched && (error || customError)}
//       value={defaultSelected}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       onAutoCompleteTyping={makeApicall}
//       nb2show={7}
//       floatingLabelStyle={{ color: 'rgb(122, 122, 122)' }}
//       onChange={(selected, name, val) => handleOnChange(selected, name, val)}
//       required={true}
//       selectionsRenderer={handleCustomDisplaySelections}
//       menuCloseButton={<FlatButton label='close' />}
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };

// // async search for multiple selection dropdown ...
// export const renderAutoCompleteMultipleSelectionAsync = ({
//   input,
//   label,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   className,
//   disabled,
//   customError,
//   ...custom
// }) => {

//   let optionsList = [];
//   let defaultSelected = [];


//   if (options && options.length) {
//     optionsList = options.map(({ id, value }) => {
//       if (input.value.length) {
//         input.value.map((selected) => {
//           if (selected === id) {
//             defaultSelected.push({
//               label: value,
//               value: id,
//             });
//           }
//           return defaultSelected;
//         });
//       }
//       return (
//         <div key={id} value={id} label={value}>
//           {value}
//         </div>
//       );
//     });
//   }

//   // let selectedArr = [];

//   const handleOnChange = (selectedValue, name, val) => {
//     let selectedData = [];
//     let values = [];
//     selectedValue.map((allValues, i) => {
//       values.push(allValues.value);
//       return values;
//     });
//     options.filter((op) => {
//       selectedValue.map((selected) => {
//         if (selected.value === op.id) {
//           selectedData.push(op);
//         }
//         return selectedData;
//       });
//       return selectedData;
//     });
//     handleNewRequest ? handleNewRequest(input, values, '', label, selectedData) : input.onChange(values);
//   };

//   const handleCustomDisplaySelections = (items) => {
//     return (
//       <div>
//         {(items.length && (items.length >= 2)) ?
//           <div>
//             {items.length === options.length ?
//               <div> All Selected</div> :
//               <div> {items.length} Values Selected </div>
//             }
//           </div>
//           :
//           <div>
//             {items.length && items.length <= 5 ?
//               displayCommaSeperatedList(items) :
//               <div>Select {label}</div>
//             }
//           </div>
//         }
//       </div>
//     );
//   };

//   const makeApicall = (searchData) => {
//     handleUpdateInput(input, defaultSelected, searchData, label);
//   };
//   return (
//     <MaterialSelectField
//       showAutocompleteThreshold={0}
//       disabled={disabled ? disabled : false}
//       floatingLabel={label}
//       multiple={true}
//       checkPosition="left"
//       errorText={touched && (error || customError)}
//       value={defaultSelected}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       onAutoCompleteTyping={makeApicall}
//       nb2show={7}
//       floatingLabelStyle={{ color: 'rgb(122, 122, 122)' }}
//       onChange={(selected, name, val) => handleOnChange(selected, name, val)}
//       required={true}
//       selectionsRenderer={handleCustomDisplaySelections}
//       menuCloseButton={<FlatButton label='close' />}
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };

// // Scheduling MultiSelection Fields
// export const renderAutoCompleteScheduling = ({
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   className,
//   disabled,
//   selected,
//   selectedTab,
//   ...custom
// }) => {
//   // let sourceArr = [];
//   // if (options && options.length) {
//   //   options.map((obj) => {
//   //     sourceArr[obj.id] = obj.value;
//   //     return sourceArr;
//   //   });
//   // }
//   let optionsList = [];
//   let defaultSelected = [];
//   if (options && options.length) {
//     optionsList = options.map(({ id, value }) => {
//       (input.value || []).map((selected) => {
//         if (selected === id) {
//           defaultSelected.push({
//             label: value,
//             value: id,
//           });
//         }
//       });
//       return (<div key={id} value={id} label={value}>
//         {value}
//       </div>);
//     });
//   }

//   //   if (label === 'Location') {
//   //     optionsList = options.map(({ id, locationName }) => (
//   //       <div key={id} value={id} label={locationName}>
//   //         {locationName}
//   //       </div>
//   //     ));

//   //     options.map((opt, index) => {
//   //       let x = {
//   //         label: opt.locationName,
//   //         value: opt.id,
//   //       };

//   //       let selectedObj = _.find(selected, ['value', opt.id]);
//   //       if (selectedTab === 'selectAll') {
//   //         defaultSelected.push(x);
//   //       } else if (selectedTab === 'deselectAll') {
//   //         defaultSelected = [];
//   //       } else if (_.isObject(selectedObj)) {
//   //         defaultSelected.push(selectedObj);
//   //       }
//   //       return defaultSelected;
//   //     });
//   //   }
//   //   if (label === 'Client') {
//   //     optionsList = options.map(({ id, firstName, lastName }) => (
//   //       <div key={id} value={id} label={`${firstName} ${lastName}`}>
//   //         {firstName} {lastName}
//   //       </div>
//   //     ));
//   //     if (options[0].deselectAll) {
//   //       optionsList.splice(0, 1);
//   //     }
//   //     options.map((opt) => {
//   //       let x = {
//   //         label: opt.firstName,
//   //         value: opt.id,
//   //       };
//   //       if (selectedTab === 'selectAll') {
//   //         defaultSelected.push(x);
//   //       } else if (selectedTab === 'deselectAll') {
//   //         defaultSelected = [];
//   //       }
//   //       return defaultSelected;
//   //     });
//   //   }
//   //   if (label === 'Staff') {
//   //     optionsList = options.map(({ id, value }) => (
//   //       <div key={id} value={id} label={value}>
//   //         {value}
//   //       </div>
//   //     ));
//   //     options.map((opt) => {
//   //       let x = {
//   //         label: opt.value,
//   //         value: opt.id,
//   //       };

//   //       let selectedObj = _.find(selected, ['value', opt.id]);
//   //       if (selectedTab === 'selectAll') {
//   //         defaultSelected.push(x);
//   //       } else if (selectedTab === 'deselectAll') {
//   //         defaultSelected = [];
//   //       } else if (_.isObject(selectedObj)) {
//   //         defaultSelected.push(selectedObj);
//   //       }
//   //       return defaultSelected;
//   //     });

//   //   }

//   //   //  multiselect for scheduling for tags ...
//   //   if (label === 'Staff Tags') {
//   //     optionsList = options.map(({ id, value }) => (
//   //       <div key={id} value={id} label={value}>
//   //         {value}
//   //       </div>
//   //     ));
//   //     options.map((opt) => {
//   //       let x = {
//   //         label: opt.value,
//   //         value: opt.id,
//   //       };

//   //       let selectedObj = _.find(selected, ['value', opt.id]);
//   //       if (selectedTab === 'selectAll') {
//   //         defaultSelected.push(x);
//   //       } else if (selectedTab === 'deselectAll') {
//   //         defaultSelected = [];
//   //       } else if (_.isObject(selectedObj)) {
//   //         defaultSelected.push(selectedObj);
//   //       }
//   //       return defaultSelected;
//   //     });

//   //   }
//   //   if (label === 'Client Tags') {
//   //     optionsList = options.map(({ id, value }) => (
//   //       <div key={id} value={id} label={value}>
//   //         {value}
//   //       </div>
//   //     ));
//   //     options.map((opt) => {
//   //       let x = {
//   //         label: opt.value,
//   //         value: opt.id,
//   //       };

//   //       let selectedObj = _.find(selected, ['value', opt.id]);
//   //       if (selectedTab === 'selectAll') {
//   //         defaultSelected.push(x);
//   //       } else if (selectedTab === 'deselectAll') {
//   //         defaultSelected = [];
//   //       } else if (_.isObject(selectedObj)) {
//   //         defaultSelected.push(selectedObj);
//   //       }
//   //       return defaultSelected;
//   //     });
//   //   }

//   // }

//   // let selectedArr = [];

//   const handleOnChange = (selectedValue, name, val) => {
//     let selectedPatientData = [];
//     let values = [];
//     selectedValue.map((allValues, i) => {
//       values.push(allValues.value);
//       return values;
//     });
//     options.filter((op) => {
//       selectedValue.map((selected) => {
//         if (selected.value === op.id) {
//           selectedPatientData.push(op);
//         }
//         return selectedPatientData;
//       });
//       return selectedPatientData;
//     });
//     handleNewRequest(input, values, null, label, selectedPatientData);
//   };


//   const handleCustomDisplaySelections = (items) => {
//     return (
//       <div>
//         <div>
//           {(items.length && (items.length > 3)) ?
//             <div>
//               {items.length === options.length ?
//                 <div> All Selected</div> :
//                 <div> {items.length} {label} Selected </div>
//               }
//             </div>
//             :
//             <div>
//               {items.length > 0 && items.length <= 3 ?
//                 displayCommaSeperatedList(items) :
//                 <div>No {(label || '').toLowerCase()} selected</div>
//               }
//             </div>
//           }
//         </div>
//       </div>
//     );
//   };

//   return (
//     <MaterialSelectField
//       showAutocompleteThreshold={1}
//       disabled={disabled ? disabled : false}
//       hintText=''
//       multiple={true}
//       checkPosition="left"
//       errorText={touched && error}
//       value={defaultSelected}
//       // elementHeight={(label === 'Location') ? 60 : 40}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       // onAutoCompleteTyping={makeApicall}
//       nb2show={7}
//       onChange={(selected, name, val) => handleOnChange(selected, name, val)}
//       required={true}
//       selectionsRenderer={handleCustomDisplaySelections}
//       menuCloseButton={<i className="material-icons selectclose">cancel</i>}
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };

// export const renderAutoCompleteMultiSelect = ({ //  Only MultiSelect No Async.
//   input,
//   label,
//   value,
//   meta: { touched, error },
//   handleUpdateInput,
//   handleNewRequest,
//   options,
//   className,
//   disabled,
//   ...custom
// }) => {
//   let sourceArr = [];
//   if (options && options.length) {
//     options.map((obj) => {
//       sourceArr[obj.id] = obj.value;
//       return sourceArr;
//     });
//   }

//   let optionsList = [];

//   if (options && options.length) {
//     if (label === 'Location') {
//       optionsList = options.map(({ id, address }) => (
//         <div key={id} value={id} label={address}>
//           {address}
//         </div>
//       ));
//     } else {
//       optionsList = options.map(({ id, value }) => (
//         <div key={id} value={id} label={value}>
//           {value}
//         </div>
//       ));
//     }
//   }

//   var selectedArr = [];
//   const handleOnChange = (selectedValue, name, val) => {
//     let selectedPatientData = [];
//     let values = [];
//     selectedValue.map((allValues, i) => {
//       values.push(allValues.value);
//       return values;
//     });
//     options.filter((op) => {
//       selectedValue.find((selected) => {
//         if (selected.value === op.id) {
//           selectedPatientData.push(op);
//         }
//         return selectedPatientData;
//       });
//       return selectedPatientData;
//     });
//     handleNewRequest(input, values, null, label, selectedPatientData);
//   };

//   const makeApicall = (searchData) => {
//     let values = [];
//     if (selectedArr.length) {
//       selectedArr.map((allValues, i) => {
//         values.push(allValues.value);
//         return values;
//       });
//     }
//     handleNewRequest(input, selectedArr, searchData, label);
//   };
//   return (
//     <MaterialSelectField
//       showAutocompleteThreshold={1}
//       hintText=''
//       multiple={true}
//       checkPosition="left"
//       errorText={touched && error}
//       floatingLabel={label}
//       autocompleteUnderlineFocusStyle={{ display: 'none' }}
//       value={selectedArr}
//       children={selectedArr}
//       onAutoCompleteTyping={makeApicall}
//       nb2show={7}
//       onChange={(selected, name, val) => handleOnChange(selected, name, val)}
//       required={true}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}
//     >
//       {optionsList}
//     </MaterialSelectField>
//   );
// };

// export const renderDateField = ({ input, minDate, openToYearSelection, maxDate, showYearFlag, locale, label, onDateChange, selected, classes, placeholder, minDateVal, maxDateVal, showMonthFlag, disabled, meta: { touched, error, warning } }) => {
//   return (
//     <DatePicker
//       floatingLabelText={placeholder}
//       container="inline"
//       locale={locale}
//       fullWidth={true}
//       disabled={disabled}
//       minDate={minDate ? minDate : new Date(1900, 1, 1)}
//       maxDate={maxDate ? maxDate : new Date(2120, 9, 11)}
//       errorText={touched && error}
//       {...input}
//       value={selected ? new Date(selected) : {}}
//       autoOk={true}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}
//       openToYearSelection={false}
//       onChange={(event, value) => onDateChange(input, value)}
//     />
//   );
// };

// // New Generic autocomplete with materialUI
// export const renderAutocompleteMUI = ({
//   input,
//   label,
//   name,
//   value,
//   disabled,
//   searchTextValue,
//   dataSource,
//   handleUpdateInput,
//   handleFilter,
//   onNewRequest,
//   meta: { touched, error },
//   ...custom
// }) => {
//   return (
//     <AutoComplete
//       searchText={searchTextValue || ''}
//       floatingLabelText={label}
//       dataSource={dataSource || []}
//       filter={(searchText, key) => searchText !== '' && (key || '').toLowerCase().indexOf((searchText).toLowerCase()) !== -1}
//       onUpdateInput={handleUpdateInput}
//       maxSearchResults={3}
//       fullWidth={true}
//       onNewRequest={onNewRequest}
//       {...input}
//       {...custom}
//     />
//   );
// };

// // auto complete with custom functionality ....
// export const renderAutocompleteForCustomData = ({
//   input,
//   label,
//   name,
//   value,
//   disabled,
//   searchTextValue,
//   dataSource,
//   handleUpdateInput,
//   handleFilter,
//   onNewRequest,
//   meta: { touched, error },
//   ...custom
// }) => {
//   const dataSourceConfig = {
//     text: 'value',
//     value: 'id',
//   };

//   const filterSearch = (searchText, key) => {
//     return searchText !== '' && (key || '').toLowerCase().indexOf((searchText).toLowerCase()) !== -1;
//   };

//   return (
//     <AutoComplete
//       searchText={searchTextValue || ''}
//       floatingLabelText={label}
//       dataSource={dataSource || []}
//       dataSourceConfig={dataSourceConfig}
//       filter={(searchText, key) => filterSearch(searchText, key)}
//       onUpdateInput={handleUpdateInput}
//       maxSearchResults={3}
//       fullWidth={true}
//       onNewRequest={onNewRequest}
//       {...input}
//       {...custom}
//     />
//   );
// };

// export const renderServersideAutocomplete = ({
//   input,
//   label,
//   multiLine,
//   rowsMax,
//   fullWidth,
//   disabled,
//   onChangeHandler,
//   meta: { touched, error },
//   ...custom
// }) => {
//   return (
//     <div>
//       <TextField
//         errorText={touched && error}
//         multiLine={multiLine}
//         rowsMax={rowsMax}
//         disabled={disabled}
//         fullWidth={true}
//         className="test"
//         autoComplete={'off'}
//         {...input}
//         {...custom} />
//     </div>
//   );
// };
// export const renderTimePickerForStaffAvailbility = ({ input, name, hintText, onDateChange, format, selected, fullWidth, disabled, placeholder, meta: { touched, error, warning } }) => {
//   return (
//     <TimePicker
//       format={format ? format : 'ampm'}
//       floatingLabelText={placeholder}
//       hintText={hintText}
//       errorText={touched && error}
//       // {...input}
//       value={selected ? new Date(selected) : null}
//       onChange={(event, value) => onDateChange(input, value)}
//       minutesStep={1}
//       fullWidth={fullWidth}
//       disabled={disabled}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}
//     />
//   );
// };

// export const renderTimePicker = ({ input, name, hintText, onDateChange, format, selected, fullWidth, disabled, placeholder, meta: { touched, error, warning } }) => {
//   return (
//     <TimePicker
//       format={format ? format : 'ampm'}
//       floatingLabelText={placeholder}
//       hintText={hintText}
//       errorText={touched && error}
//       {...input}
//       value={selected !== null ? new Date(selected) : {}}
//       onChange={(event, value) => onDateChange(input, value)}
//       minutesStep={1}
//       fullWidth={fullWidth}
//       disabled={disabled}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}
//     />
//   );
// };

// export const renderUploadField = ({ input, label, type, multiple, style, fieldValue, value, meta: { touched, error, warning } }) => (
//   <input {...input} type={type} multiple={multiple} value={value} style={style} />
// );


// // Patient Info Tags
// export const normalizeZipCode = (value, previousValue) => {
//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');
//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward 12345-1234
//     if (onlyNums.length < 5) {
//       return onlyNums;
//     }
//     if (onlyNums.length === 5) {
//       return onlyNums.slice(0, 5);
//     }
//     if (onlyNums.length > 5) {
//       return onlyNums.slice(0, 5) + '-' + onlyNums.slice(5);
//     }
//   }
//   if (onlyNums.length < 5) {
//     return onlyNums;
//   }
//   if (onlyNums.length > 5) {
//     return onlyNums.slice(0, 5) + '-' + onlyNums.slice(5);
//   }
//   if (onlyNums.length === 5) {
//     return onlyNums.slice(0, 5);
//   }
// };


// export const normalizeRate = (value, previousValue) => {

//   if (!value) {
//     return value;
//   }
//   if (parseFloat(value) === 0) {
//     return '';
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');

//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward 12345-1234
//     if (onlyNums.length > 0) {

//       if (onlyNums.length === 2) {
//         if (value.indexOf('.') === onlyNums.length - 1) {
//           return '00.' + onlyNums.slice(1) + '0';
//         }
//         return onlyNums + '.00';
//       } else if (onlyNums.length === 1) {
//         return '00.0' + onlyNums;
//       } else if (onlyNums.length === 3) {
//         if (previousValue.length > value.length) {
//           return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2);
//         } else if (onlyNums[onlyNums.length - 1] === '0') {

//           return '00.' + onlyNums.slice(0, 2);
//         }
//         return '0' + onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length === 4) {
//         return onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length === 5) {
//         if (onlyNums[0] === '0') {
//           return onlyNums.slice(1, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//         } else
//           return onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length > 5) {
//         return onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       }

//     } else {
//       return null;
//     }
//   } else {
//     // tabbing backspace

//     if (onlyNums.length > 0) {

//       if (onlyNums.length === 2) {
//         if (value.indexOf('.') === onlyNums.length - 1) {
//           return '00.' + onlyNums.slice(1) + '0';
//         }
//         if (value.indexOf('.') === onlyNums.length) {
//           return '00.' + onlyNums;
//         }
//         return onlyNums + '.00';
//       } else if (onlyNums.length === 1) {
//         return '0' + onlyNums + '.00';
//       } else if (onlyNums.length === 3) {
//         if (value.indexOf('.') === onlyNums.length - 1) {
//           if (previousValue.length > value.length) {
//             return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2);
//           } else if (onlyNums[onlyNums.length - 1] === '0') {
//             return '00.' + onlyNums.slice(0, 2);
//           } else {
//             return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2) + '0';
//           }
//         } else
//           return '0' + onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length === 4) {
//         if (value.indexOf('.') === -1) {
//           return onlyNums + '.00';
//         }
//         return onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length > 4) {
//         if (value.indexOf('.') !== -1) {

//           if (value.indexOf('.') === onlyNums.length - 1) {
//             if (previousValue.length > value.length) {
//               return onlyNums.slice(0, value.indexOf('.') - 1) + '.' + onlyNums.slice(value.indexOf('.') - 1);
//             } else
//               return onlyNums.slice(0, value.indexOf('.')) + '.' + onlyNums.slice(value.indexOf('.')) + '0';
//           } else
//             return onlyNums.slice(0, value.indexOf('.')) + '.' + onlyNums.slice(value.indexOf('.'));
//         } else {
//           return onlyNums + '.00';
//         }
//       }

//     } else {
//       return null;
//     }
//   }

//   // return onlyNums.slice(0, 5) + '-' + onlyNums.slice(5);
// };

// export const normalizeMileage = (value, previousValue) => {

//   if (!value) {
//     return value;
//   }
//   if (parseFloat(value) === 0) {
//     return '';
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');
//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward 12345-1234
//     if (onlyNums.length > 0) {

//       if (onlyNums.length === 2) {
//         if (value.indexOf('.') === onlyNums.length - 1) {
//           return '00.' + onlyNums.slice(1) + '0';
//         }
//         return onlyNums + '.00';
//       } else if (onlyNums.length === 1) {
//         return '00.00' + onlyNums;
//       } else if (onlyNums.length === 3) {
//         if (previousValue.length > value.length) {
//           return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2);
//         } else if (onlyNums[onlyNums.length - 1] === '0') {

//           return '00.' + onlyNums.slice(0, 2);
//         }
//         return '0' + onlyNums.slice(0, onlyNums.length - 4) + '.' + onlyNums.slice(onlyNums.length - 3);
//       } else if (onlyNums.length === 4) {
//         return onlyNums.slice(0, onlyNums.length - 4) + '.' + onlyNums.slice(onlyNums.length - 3);
//       } else if (onlyNums.length === 5) {
//         return onlyNums.slice(0, onlyNums.length - 4) + '.' + onlyNums.slice(onlyNums.length - 3);
//       } else if (onlyNums.length === 6) {
//         return onlyNums.slice(0, onlyNums.length - 4) + '.' + onlyNums.slice(onlyNums.length - 3);
//       } else if (onlyNums.length > 6) {
//         return onlyNums.slice(0, onlyNums.length - 4) + '.' + onlyNums.slice(onlyNums.length - 3);
//       }

//     } else {
//       return null;
//     }
//   } else {
//     // tabbing backspace

//     if (onlyNums.length > 0) {

//       if (onlyNums.length === 2) {
//         if (value.indexOf('.') === onlyNums.length - 1) {
//           return '00.' + onlyNums.slice(1) + '0';
//         }
//         if (value.indexOf('.') === onlyNums.length) {
//           return '00.' + onlyNums;
//         }
//         return onlyNums + '.00';
//       } else if (onlyNums.length === 1) {
//         return '0' + onlyNums + '.00';
//       } else if (onlyNums.length === 3) {
//         if (value.indexOf('.') === onlyNums.length - 1) {
//           if (previousValue.length > value.length) {
//             return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2);
//           } else if (onlyNums[onlyNums.length - 1] === '0') {
//             return '00.' + onlyNums.slice(0, 2);
//           } else {
//             return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2) + '0';
//           }
//         } else
//           return '0' + onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length === 4) {
//         if (value.indexOf('.') === -1) {
//           return onlyNums + '.00';
//         }
//         return onlyNums.slice(0, onlyNums.length - 2) + '.' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length > 4) {
//         if (value.indexOf('.') !== -1) {

//           if (value.indexOf('.') === onlyNums.length - 1) {
//             if (previousValue.length > value.length) {
//               return onlyNums.slice(0, value.indexOf('.') - 1) + '.' + onlyNums.slice(value.indexOf('.') - 1);
//             } else
//               return onlyNums.slice(0, value.indexOf('.')) + '.' + onlyNums.slice(value.indexOf('.')) + '0';
//           } else
//             return onlyNums.slice(0, value.indexOf('.')) + '.' + onlyNums.slice(value.indexOf('.'));
//         } else {
//           return onlyNums + '.00';
//         }
//       }

//     } else {
//       return null;
//     }
//   }

//   // return onlyNums.slice(0, 5) + '-' + onlyNums.slice(5);
// };

// export const normalizeHoursAndMinutes = (value, previousValue) => {
//   if (!value) {
//     return value;
//   }
//   return value.replace(/[^:\d]/g, '');
// };


// export const normalizeTime = (value, previousValue) => {

//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');

//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward 12345-1234
//     if (onlyNums.length > 0) {

//       if (onlyNums.length === 2) {
//         if (value.indexOf(':') === onlyNums.length - 1) {
//           return '00:' + onlyNums.slice(1) + '0';
//         }
//         return onlyNums + ':00';
//       } else if (onlyNums.length === 1) {
//         return '00:0' + onlyNums;
//       } else if (onlyNums.length === 3) {
//         if (previousValue.length > value.length) {
//           return onlyNums.slice(0, 2) + ':' + onlyNums.slice(2);
//         } else if (onlyNums[onlyNums.length - 1] === '0') {

//           return '00:' + onlyNums.slice(0, 2);
//         }
//         return '0' + onlyNums.slice(0, onlyNums.length - 2) + ':' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length === 4) {
//         return onlyNums.slice(0, onlyNums.length - 2) + ':' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length === 5) {
//         if (onlyNums[0] === '0') {
//           return onlyNums.slice(1, onlyNums.length - 2) + ':' + onlyNums.slice(onlyNums.length - 2);
//         } else
//           return onlyNums.slice(0, onlyNums.length - 2) + ':' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length > 5) {
//         return onlyNums.slice(0, onlyNums.length - 2) + ':' + onlyNums.slice(onlyNums.length - 2);
//       }

//     } else {
//       return null;
//     }
//   } else {
//     // tabbing backspace

//     if (onlyNums.length > 0) {

//       if (onlyNums.length === 2) {
//         if (value.indexOf(':') === onlyNums.length - 1) {
//           return '00:' + onlyNums.slice(1) + '0';
//         }
//         if (value.indexOf(':') === onlyNums.length) {
//           return '00:' + onlyNums;
//         }
//         return onlyNums + ':00';
//       } else if (onlyNums.length === 1) {
//         return '0' + onlyNums + ':00';
//       } else if (onlyNums.length === 3) {
//         if (value.indexOf(':') === onlyNums.length - 1) {
//           if (previousValue.length > value.length) {
//             return onlyNums.slice(0, 2) + ':' + onlyNums.slice(2);
//           } else if (onlyNums[onlyNums.length - 1] === '0') {
//             return '00:' + onlyNums.slice(0, 2);
//           } else {
//             return onlyNums.slice(0, 2) + ':' + onlyNums.slice(2) + '0';
//           }
//         } else
//           return '0' + onlyNums.slice(0, onlyNums.length - 2) + ':' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length === 4) {
//         if (value.indexOf(':') === -1) {
//           return onlyNums + ':00';
//         }
//         return onlyNums.slice(0, onlyNums.length - 2) + ':' + onlyNums.slice(onlyNums.length - 2);
//       } else if (onlyNums.length > 4) {
//         if (value.indexOf(':') !== -1) {

//           if (value.indexOf(':') === onlyNums.length - 1) {
//             if (previousValue.length > value.length) {
//               return onlyNums.slice(0, value.indexOf(':') - 1) + ':' + onlyNums.slice(value.indexOf(':') - 1);
//             } else
//               return onlyNums.slice(0, value.indexOf(':')) + ':' + onlyNums.slice(value.indexOf(':')) + '0';
//           } else
//             return onlyNums.slice(0, value.indexOf(':')) + ':' + onlyNums.slice(value.indexOf(':'));
//         } else {
//           return onlyNums + ':00';
//         }
//       }

//     } else {
//       return null;
//     }
//   }
// };

// export const normalizeSSN = (value, previousValue) => {
//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');
//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward
//     if (onlyNums.length === 3) {
//       return onlyNums + '-';
//     }
//     if (onlyNums.length === 6) {
//       return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-';
//     }
//   }
//   if (onlyNums.length <= 3) {
//     return onlyNums;
//   }
//   if (onlyNums.length <= 6) {
//     return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3);
//   }
//   return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 5) + '-' + onlyNums.slice(5, 9);
// };

// export const normalizeCardIssueDate = (value, previousValue) => {
//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');
//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward
//     if (onlyNums.length === 3) {
//       return onlyNums + '-';
//     }
//     if (onlyNums.length === 6) {
//       return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-';
//     }
//   }
//   if (onlyNums.length <= 3) {
//     return onlyNums;
//   }
//   if (onlyNums.length <= 6) {
//     return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3);
//   }
//   return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 5) + '-' + onlyNums.slice(5, 9);
// };

// export const normalizeMobile = (value, previousValue) => {
//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');
//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward
//     if (onlyNums.length === 3) {
//       return onlyNums + ' ';
//     }
//     if (onlyNums.length === 6) {
//       return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3) + '-';
//     }
//   }
//   if (onlyNums.length <= 3) {
//     return onlyNums;
//   }
//   if (onlyNums.length <= 6) {
//     return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3);
//   }
//   return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10);
// };
// export const normalizeFax = (value, previousValue) => {
//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, '');
//   if (!previousValue || value.length > previousValue.length) {
//     // typing forward
//     if (onlyNums.length === 3) {
//       return onlyNums + ' ';
//     }
//     if (onlyNums.length === 6) {
//       return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3) + '-';
//     }
//   }
//   if (onlyNums.length <= 3) {
//     return onlyNums;
//   }
//   if (onlyNums.length <= 6) {
//     return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3);
//   }
//   return '(' + onlyNums.slice(0, 3) + ') ' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 13);
// };

// export const isValidFileType = (fName, fType) => {
//   // Create an object for all extension lists
//   let extentionLists = {};
//   let isValidType = false;
//   extentionLists.video = ['m4v', 'avi', 'mpg', 'mp4'];
//   extentionLists.image = ['jpg', 'jpeg', 'bmp', 'png', 'ico'];
//   extentionLists.pdf = ['pdf'];
//   extentionLists.excel = ['excel'];
//   extentionLists.xml = ['xml'];
//   // get the extension of the selected file.
//   let fileExtension = fName.split('.').pop().toLowerCase();
//   isValidType = extentionLists[fType].indexOf(fileExtension) > -1;
//   return isValidType;
// };

// export const isInteger = (value) => {

//   let onlyNums = value.replace(/[^\d]/g, '');

//   if (!value) {
//     return value;
//   }
//   return onlyNums;
// };
// export const isValidName = (value) => {
//   let onlyAlphaNumerics = value.replace(/[^a-zA-Z0-9@._-]/g, '');
//   if (!value) {
//     return value;
//   }
//   return onlyAlphaNumerics;
// };

// export const isValidNameWithSpace = (value) => {
//   let onlyAlphaNumerics = value.replace(/[^a-zA-Z0-9@,._\-(\s)]/g, '');
//   if (!value) {
//     return value;
//   }
//   return onlyAlphaNumerics;
// };

// export const isFloat = (value) => {

//   const onlyNums = value.replace(/[^.\d]/g, '');
//   // value.match(/^((\.\d+)|(\d+(\.\d+)?))$/, '');

//   if (!value) {
//     return value;
//   }
//   return onlyNums;
// };


// export const normalizeDecimal = (value, previousValue) => {
//   // console.log(value, previousValue);
//   // if (!value) {
//   //   return value;
//   // }
//   const onlyNums = value.replace(/[^.\d]/g, '');

//   if (((onlyNums || '').match(/\./g) || []).length > 1) {
//     return previousValue;
//   }
//   if (value && value === previousValue) {
//     return parseFloat(onlyNums || 0).toFixed(2);
//   }
//   return onlyNums;
// };


// export const normalizeMileageRate = (value, previousValue) => {
//   // console.log(value, previousValue);
//   // if (!value) {
//   //   return value;
//   // }
//   const onlyNums = value.replace(/[^.\d]/g, '');

//   if (((onlyNums || '').match(/\./g) || []).length > 1) {
//     return previousValue;
//   }
//   if (value && value === previousValue) {
//     return parseFloat(onlyNums || 0).toFixed(3);
//   }
//   return onlyNums;
// };


// export const isValidApartmentWithSpace = (value) => {
//   let onlyAlphaNumerics = value.replace(/[^a-zA-Z0-9@#,._\-(\s)]/g, '');
//   if (!value) {
//     return value;
//   }
//   return onlyAlphaNumerics;
// };


// export const renderPasswordField = ({    
//   label,
//   id,
//   name,   
//   disabled,
//   defaultValue,
//   onPasswordChange,
//   maxLength,
//   loader,
//   meta: { touched, error },
//   customError,  
// }) => {
//   return (
//     <TextField
//       id={id}
//       name={name}      
//       type='password'
//       defaultValue={defaultValue}
//       floatingLabelText={label}
//       errorText={touched && (error || customError)}
//       disabled={disabled}
//       fullWidth={true}
//       className="valuefont"
//       autoComplete={'off'}
//       onChange={onPasswordChange}
//       maxLength={maxLength}
//       floatingLabelStyle={{ color: '#7a7a7a' }}
//       floatingLabelFocusStyle={{ color: '#09A7DC' }}           
//     />
//   );
// };