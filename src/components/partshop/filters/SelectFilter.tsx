import {FC, useState} from 'react'

type SelectFilterProps = {
  id: string;
  value: string;
  setValue: any;
  options: {id: string, title: string}[];
  placeholder: string;
  maxHeight?: string;
};

const SelectFilter: FC<SelectFilterProps> = (props) => {
  const [search, setSearch] = useState('')

  if (props.options.length === 0) return (<></>)

  return (
      <>
        <div className="form-floating mb-3">
          <input className="form-control" id={"ps-filter-search-input-" + props.id} type="text" placeholder={props.placeholder} value={search} onChange={(event) => setSearch(event.target.value)} />
          <label htmlFor={"ps-filter-search-input-" + props.id}>{props.placeholder}</label>
        </div>

        <div style={{maxHeight: props.maxHeight, overflowY: "auto", overflowX: "hidden"}}>
          {
            props.options
              .filter((option) => (
                !search || option.title.toLowerCase().includes(search.toLowerCase())
              ))
              .map((option: {id: string, title: string}) => (
                <div key={option.id} className="form-check">
                  <input className="form-check-input" id={"ps-checkbox-filter-input" + option.id} type="radio" value={option.id} onChange={(event) => props.setValue(event.target.value)} checked={option.id === props.value} />
                  <label className="form-check-label" htmlFor={"ps-checkbox-filter-input" + option.id}>{option.title}</label>
                </div>
              ))
          }
        </div>
      </>
  );
};

export default SelectFilter;
