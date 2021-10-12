import s from './ColorPicker.module.css';

export default function ColorPicker({ colors }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div className={s.div}>
        {colors.map(color => (
          <span
            key={color.color}
            className={s.option}
            style={{ backgroundColor: color.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}
