-- CreateTable
CREATE TABLE "Pilot" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hours_fly" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Pilot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crew" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Crew_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Base" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Base_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flights" (
    "id" SERIAL NOT NULL,
    "departure_time" TIMESTAMP(3) NOT NULL,
    "arrive_time" TIMESTAMP(3) NOT NULL,
    "from_id" INTEGER NOT NULL,
    "to_id" INTEGER NOT NULL,
    "pilot_id" INTEGER NOT NULL,

    CONSTRAINT "Flights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crew_Flights" (
    "crew_id" INTEGER NOT NULL,
    "flight_id" INTEGER NOT NULL,

    CONSTRAINT "Crew_Flights_pkey" PRIMARY KEY ("crew_id","flight_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pilot_code_key" ON "Pilot"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Crew_code_key" ON "Crew"("code");

-- AddForeignKey
ALTER TABLE "Flights" ADD CONSTRAINT "Flights_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "Base"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flights" ADD CONSTRAINT "Flights_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "Base"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flights" ADD CONSTRAINT "Flights_pilot_id_fkey" FOREIGN KEY ("pilot_id") REFERENCES "Pilot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crew_Flights" ADD CONSTRAINT "Crew_Flights_crew_id_fkey" FOREIGN KEY ("crew_id") REFERENCES "Crew"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crew_Flights" ADD CONSTRAINT "Crew_Flights_flight_id_fkey" FOREIGN KEY ("flight_id") REFERENCES "Flights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
