
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Courses() {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase.from("courses").select("*");

    return (
        <main>
            <h1>Courses</h1>
            <ul>
                {data.map((course) => (
                    <li key={course.id}>
                        <img src={course.image} alt={course.name} />
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}