CREATE TABLE "courses" (
  "course_id" int PRIMARY KEY,
  "created_at" timestamp,
  "course_name" varchar,
  "description" text,
  "image" varchar
);

CREATE TABLE "courses_section" (
  "section_id" int PRIMARY KEY,
  "course_id" int,
  "title" varchar,
  "order" int
);

CREATE TABLE "courses_media" (
  "media_id" int PRIMARY KEY,
  "section_id" int,
  "content" text
);

CREATE TABLE "courses_comments" (
  "comment_id" int PRIMARY KEY,
  "student_id" int,
  "media_id" int,
  "comment" text
);

CREATE TABLE "students" (
  "student_id" int PRIMARY KEY,
  "created_at" timestamp,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar
);

CREATE TABLE "students_progress" (
  "student_id" int,
  "course_id" int,
  "section_id" int,
  "created_at" timestamp,
  "modified_at" timestamp
);

ALTER TABLE "courses_section" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("course_id");

ALTER TABLE "courses_media" ADD FOREIGN KEY ("section_id") REFERENCES "courses_section" ("section_id");

ALTER TABLE "courses_comments" ADD FOREIGN KEY ("media_id") REFERENCES "courses_media" ("media_id");

ALTER TABLE "courses_comments" ADD FOREIGN KEY ("student_id") REFERENCES "students" ("student_id");

ALTER TABLE "students_progress" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("course_id");

ALTER TABLE "students_progress" ADD FOREIGN KEY ("student_id") REFERENCES "students" ("student_id");
