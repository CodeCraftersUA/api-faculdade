-- CreateTable
CREATE TABLE "professors" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "tb_professores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "name" VARCHAR(100) NOT NULL,
    "id" BIGSERIAL NOT NULL,
    "acronym" VARCHAR(6) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);
