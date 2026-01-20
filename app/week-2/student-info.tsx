import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Mofi Popoola</p>
      <p>Github: {""}
        <Link href="https://github.com/Mofi-p?tab=repositories">https://github.com/Mofi-p?tab=repositories</Link>
      </p>
    </div>
  );
}