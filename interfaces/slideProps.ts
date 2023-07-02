import { Dispatch, SetStateAction } from "react";

export interface SlideProps {
  showSlide?: boolean;
  toggleSlide: Dispatch<SetStateAction<boolean>>;
}
