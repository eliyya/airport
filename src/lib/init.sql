-- CreateTable
CREATE TABLE IF NOT EXISTS "Base" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Flight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "departure" INTEGER NOT NULL,
    "arrive" INTEGER NOT NULL,
    "pilot_id" INTEGER NOT NULL,
    "from_id" INTEGER NOT NULL,
    "to_id" INTEGER NOT NULL,
    CONSTRAINT "Flight_pilot_id_fkey" FOREIGN KEY ("pilot_id") REFERENCES "Pilot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flight_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "Base" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flight_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "Base" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Pilot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hours" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "FlightsMembers" (
    "member_id" INTEGER NOT NULL,
    "flight_id" INTEGER NOT NULL,

    PRIMARY KEY ("member_id", "flight_id"),
    CONSTRAINT "FlightsMembers_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Member" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FlightsMembers_flight_id_fkey" FOREIGN KEY ("flight_id") REFERENCES "Flight" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Base_code_key" ON "Base"("code");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Base_name_key" ON "Base"("name");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Member_code_key" ON "Member"("code");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Pilot_code_key" ON "Pilot"("code");
