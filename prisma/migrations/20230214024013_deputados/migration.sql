-- CreateTable
CREATE TABLE "deputados" (
    "id" SERIAL NOT NULL,
    "idDeputado" INTEGER,
    "nome" VARCHAR(255) NOT NULL,
    "siglaPartido" VARCHAR(20) NOT NULL,
    "uriPartido" TEXT NOT NULL,
    "siglaUF" VARCHAR(2) NOT NULL,
    "fotoDeputado" TEXT,
    "email" TEXT,

    CONSTRAINT "deputados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deputados_idDeputado_key" ON "deputados"("idDeputado");
