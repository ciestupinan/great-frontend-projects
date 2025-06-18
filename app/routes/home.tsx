import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import TestimonalCard from "~/testimonalCard/testimonialCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Great FrontEnd Projects" },
  ];
}

export default function Home() {
  return <TestimonalCard />;
}
