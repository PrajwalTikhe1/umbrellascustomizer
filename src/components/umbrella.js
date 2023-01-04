import React, { Component } from 'react';
import LogoUpload from './logoUpload';

function ButtonColor({ color, changeUmbrellaColor }) {
  return (
    <button
      className={color}
      onClick={() => changeUmbrellaColor(color)}
    ></button>
  );
}

class Umbrella extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: 'false',
      showColor: 'blue',
      showUmbrellaColor: '../images/blue_umbrella.png',
    };
    this.changeUmbrellaColor = this.changeUmbrellaColor.bind(this);
    this.handleLogoUpload = this.handleLogoUpload.bind(this);
  }

  changeUmbrellaColor(value) {
    this.setState({ showColor: value });
    if (value === 'yellow') {
      this.setState({
        showUmbrellaColor: '../images/yellow_umbrella.png',
      });
    } else if (value === 'pink') {
      this.setState({
        showUmbrellaColor: '../images/pink_umbrella.png',
      });
    } else {
      this.setState({
        showUmbrellaColor: '../images/blue_umbrella.png',
      });
    }
  }

  handleLogoUpload(f) {
    if (f != null) {
      var reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e) {
          document.getElementById('list').innerHTML = [
            '<img src="',
            e.target.result,
            '" title="',
            theFile.name,
            '" class="over" width="120" height="40" />',
          ].join('');
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }

  render() {
    let imgSrc = this.state.showUmbrellaColor;
    return (
      <>
        <div className="col-12 col-sm-7 text-center">
          <img className="umbrellaImg" src={imgSrc} alt="Umbrella" />
          <div id="list" />
        </div>
        <div className="col-12 col-sm-5 text-start">
          <h1>Umbrellas Customizer</h1>
          <div className="color">
            <ButtonColor
              color="yellow"
              changeUmbrellaColor={this.changeUmbrellaColor}
            />
            <ButtonColor
              color="blue"
              changeUmbrellaColor={this.changeUmbrellaColor}
            />
            <ButtonColor
              color="pink"
              changeUmbrellaColor={this.changeUmbrellaColor}
            />
          </div>
          <div>
            <h6>Customize your umbrella</h6>
            <p>
              Upload a logo for an instant preview. <br />
              .png and .jpg files only. Max file size is 5MB.
            </p>
          </div>
          <LogoUpload handleLogoUpload={this.handleLogoUpload} />
        </div>
      </>
    );
  }
}

export default Umbrella;
