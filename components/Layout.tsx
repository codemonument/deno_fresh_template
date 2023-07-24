import { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <header>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      <main>{props.children}</main>
    </>
  );
}
