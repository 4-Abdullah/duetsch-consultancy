"use client";

// Component Block
import Button from "./Button";
import Card from "./Card";

// Note: Update full component & update it with server component
function Header({ title, actionBtm, subtitle, secondarybtnOnClick }) {
  return (
    <div className="pt-1">
      <div>Header</div>
      <Button
        type="secondary"
        onClick={secondarybtnOnClick}
        title="Button"
        font="var(--font-poppins)"
      />
    </div>
  );
}

export default Header;
