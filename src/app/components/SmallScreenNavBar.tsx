"use client";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SmallScreenNavbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex h-[36px] md:hidden">
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link href="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link href="/properties">
            <MenuItem onClick={handleClose}>Properties</MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Link>
          <Link href="/inquiry">
            <MenuItem onClick={handleClose}>Inquire</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Link>
        </Menu>
      </div>
      <Link href="/" className="text-lg py-1 font-bold">
        PropertyPhilippines
      </Link>
    </div>
  );
}
