-- CreateTable
CREATE TABLE "professors" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR,
    "address" VARCHAR(200)[],
    "specialty" VARCHAR(70)[],

    CONSTRAINT "professors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "acronym" VARCHAR(6) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "course_name_key" ON "course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "course_acronym_key" ON "course"("acronym");
