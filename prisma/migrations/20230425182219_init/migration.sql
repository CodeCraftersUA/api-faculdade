-- CreateTable
CREATE TABLE "professors" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR,
    "address" VARCHAR(200)[],
    "specialty" VARCHAR(70)[],

    CONSTRAINT "professors_pkey" PRIMARY KEY ("id")
);
