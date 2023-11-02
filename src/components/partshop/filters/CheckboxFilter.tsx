import {FC, SetStateAction, useState} from 'react'

type FamilyFilterProps = {
  id: string;
  title: string;
  allOptions: [{id: string, title: string}];
  selectedOptions: [{id: string, title: string}];
  onChange: any;
  doFilter: any;
  placeholder?: string;
  maxHeight?: string;
};

const CheckboxFilter: FC<FamilyFilterProps> = (props) => {
  const [optionsFilter, setOptionsFilter] = useState('')
  const [filteredOptions, filterOptions] = useState(props.allOptions)

  //filterOptions(props.allOptions);

  const filterChanged = (event: { target: { value: SetStateAction<string>; }; }) => {
    // @ts-ignore
    filterOptions(props.allOptions.filter((el) => el.title.toLowerCase().includes(event.target.value)))
    setOptionsFilter(event.target.value)
  }

  const onChanged = (event: { target: { value: SetStateAction<string>; }; }) => {
    // @ts-ignore
    props.onChange(props.selectedOptions.includes(event.target.value) ? props.selectedOptions.filter((item: SetStateAction<string>) => item !== event.target.value) : [].concat(props.selectedOptions, event.target.value))
    props.doFilter()
  }

  return (
    <div className="widget">
      <h4 className="widget-title mb-3">{props.title}</h4>
      <div className="form-floating mb-3">
        <input className="form-control" id={"ps-filter-input-" + props.id} type="text" placeholder={props.placeholder} value={optionsFilter} onChange={filterChanged} />
        <label htmlFor={"ps-filter-input-" + props.id}>{props.placeholder}</label>
      </div>
      <div style={{maxHeight: props.maxHeight, overflowY: "auto"}}>
        {props.allOptions.map(({id, title}) => (
          <div className="form-check mb-1" key={id}>
            <input className="form-check-input" id={"ps-filter-option-input-" + props.id + "-" + id} type="checkbox" onChange={onChanged} value={id} />
            <label className="form-check-label" htmlFor={"ps-filter-option-input-" + props.id + "-" + id}>{title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
