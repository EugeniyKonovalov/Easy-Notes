import React, { useState } from "react";
import { ITags } from "../../types/appDataTypes";
import classes from "./NoteItem.module.css";

const TagsItemForm: React.FC<ITags> = (props) => {
  const [tagsItem, setTagsItem] = useState<string>("");
  const newTagHandler = (event: React.FormEvent) => {
    event!.preventDefault();
    props.setTags([...props.tags, tagsItem]);
    setTagsItem("");
  };
  console.log(tagsItem);
  const removeTag = (index: number) => {
    props.setTags(props.tags.filter((el, i) => i !== index));
  };

  return (
    <>
      <div className={classes.control}>
        <p>Tags</p>
        <div className={classes["tags-container"]}>
          {props.tags.map((item, index) => (
            <div className={classes.tags} key={index}>
              <span onClick={() => removeTag(index)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="tag">
          <button className="btn" onClick={newTagHandler}>
            Add Tag
          </button>
        </label>

        <input
          type="text"
          id="tag"
          value={tagsItem}
          onChange={(e) => setTagsItem(e.target.value)}
        />
      </div>
    </>
  );
};

export default TagsItemForm;
