import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Menu, ChevronRight, Phone, Mail, MapPin, Calendar, Users2, Landmark, Gavel, Image as ImageIcon, Globe } from "lucide-react";

// ------------------------------------------------------------
// WEBSITE: Lembaga Adat Desa Pulau Pinang
// ------------------------------------------------------------

const struktur = [
  { jabatan: "Ketua Adat", nama: "Iskandar I", kontak: "0822-5640-0038" },
  { jabatan: "Sekretaris", nama: "Siti Anisa Labia", kontak: "0821-5462-8396" },
  { jabatan: "Ketua Bidang Adat Istiadat", nama: "Kasmir Kasim", kontak: "0822-5399-6506" },
  { jabatan: "Ketua Bidang Hukum Adat", nama: "Amasia", kontak: "0823-5241-3370" },
  { jabatan: "Ketua Bidang Pelestarian Budaya", nama: "Thomas Ding", kontak: "0823-5123-0557" },
];

const peraturan = [
  {
    judul: "Sanksi Pelanggaran Norma Adat",
    ringkas: "Ketentuan sanksi bertingkat untuk pelanggaran yang merusak kerukunan, lingkungan, dan ketertiban.",
  },
  {
    judul: "Tata Cara Musyawarah Adat",
    ringkas: "Prosedur pengambilan keputusan berbasis mufakat dan peran tokoh adat.",
  },
  {
    judul: "Pelestarian Warisan Budaya",
    ringkas: "Pedoman upacara adat, penggunaan pakaian adat, dan perlindungan situs budaya.",
  },
];

// ... sisa kode website tetap seperti sebelumnya
