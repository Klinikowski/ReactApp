import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";

const types = {
  video: "video",
  article: "article",
  note: "note",
};

const descriptions = {
  video: "film",
  article: "artykuł",
  note: "wpis",
};

class Form extends React.Component {
  state = {
    type: types.video,
    title: "",
    link: "",
    image: "",
    description: "",
  };

  handleRadioButtonChange = type => {
    this.setState({
      type: type,
    });
  };
  
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>dodaj {descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <div className={styles.formOptions}>
                <Radio
                  id={types.video}
                  checked={type === types.video}
                  changeFn={() => this.handleRadioButtonChange(types.video)}
                >
                  Film
                </Radio>
                <Radio
                  id={types.article}
                  checked={type === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Artykuł
                </Radio>
                <Radio
                  id={types.note}
                  checked={type === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Wpis
                </Radio>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={
                  type === types.video ? "Nazwa filmu" : "Nazwa"
                }
              />
              {type !== types.note ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={
                    type === types.video ? "Link filmu" : "Link"
                  }
                />
              ) : null}

              {type === types.video ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="image"
                />
              ) : null}
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="opis"
              />
              <Button>dodaj</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
