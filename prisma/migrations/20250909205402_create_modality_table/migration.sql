-- CreateTable
CREATE TABLE "modalities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "indoor" BOOLEAN,
    "origin_country" TEXT NOT NULL,
    "olympic" BOOLEAN NOT NULL,
    "popularity_rank" INTEGER NOT NULL,
    "basic_rules" TEXT NOT NULL,
    "team_size" INTEGER,
    "equipment" TEXT,
    "fundamentals" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "modalities_name_key" ON "modalities"("name");
