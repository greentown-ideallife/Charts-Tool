import React from 'react';
import { Input } from 'antd';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

class SketchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        hex: props.defaultValue || '#41A0FC',
      },
    };
  }

    handleClick = () => {
      const { displayColorPicker } = this.state;
      this.setState({ displayColorPicker: !displayColorPicker });
    };

    handleClose = () => {
      this.setState({ displayColorPicker: false });
    };

    handleChange = color => {
      const { onChange } = this.props;
      this.setState({ color });
      onChange(color.hex);
    };

    render() {
      const { color, displayColorPicker } = this.state;
      const styles = reactCSS({
        default: {
          color: {
            padding: '5px',
            width: '36px',
            height: '21px',
            borderRadius: '2px',
            background: `${color.hex}`,
            cursor: 'pointer',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            verticalAlign: 'top',
            marginRight: '10px',
          },
          swatch: {
            background: '#fff',
            display: 'inline-block',
          },
          popover: {
            position: 'fixed',
            zIndex: '999',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
          input: {
            width: '70px',
            height: '22px',
            cursor: 'pointer',
          },
        },
      });

      return (
        <div>
          <div style={styles.swatch}>
            <div style={styles.color} onClick={this.handleClick} />
            <Input size="small" value={color.hex} style={styles.input} />
          </div>
          {displayColorPicker ? (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <SketchPicker color={color} onChange={this.handleChange} />
            </div>
          ) : null}
        </div>
      );
    }
}

export default SketchExample;
