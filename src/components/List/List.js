import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({items}) => (
  <>
  {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>  
  ) : (
    <h1 class={styles.noItems}>Halo,Halo!!! Niczego tu nie ma 🥺</h1>
  )}
  </>
);

export default List;
