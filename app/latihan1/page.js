import React from "react";

const StudentTable = () => {
  const students = [
    {
      no: 1,
      nim: "220201",
      nama: "Ahmad Syaifullah",
      gender: "Laki-laki",
      prodi: "Teknik Informatika",
      kelas: "TI-2A",
      semester: 2,
      alamat: "Jakarta",
      hobby: "Coding",
      citaCita: "Software Engineer",
    },
    {
      no: 2,
      nim: "220202",
      nama: "Budi Santoso",
      gender: "Laki-laki",
      prodi: "Sistem Informasi",
      kelas: "SI-3B",
      semester: 4,
      alamat: "Bandung",
      hobby: "Gaming",
      citaCita: "Game Developer",
    },
    {
      no: 3,
      nim: "220203",
      nama: "Cicilia Putri",
      gender: "Perempuan",
      prodi: "Teknik Elektro",
      kelas: "TE-2C",
      semester: 2,
      alamat: "Surabaya",
      hobby: "Membaca",
      citaCita: "AI Researcher",
    },
    {
      no: 4,
      nim: "220204",
      nama: "Dini Pratiwi",
      gender: "Perempuan",
      prodi: "Manajemen",
      kelas: "MN-4D",
      semester: 6,
      alamat: "Yogyakarta",
      hobby: "Menulis",
      citaCita: "Entrepreneur",
    },
    {
      no: 5,
      nim: "220205",
      nama: "Erwin Saputra",
      gender: "Laki-laki",
      prodi: "Akuntansi",
      kelas: "AK-5E",
      semester: 8,
      alamat: "Medan",
      hobby: "Olahraga",
      citaCita: "Akuntan Publik",
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen text-center">
      <h2 className="text-3xl font-bold mb-2 text-gray-800">Data Mahasiswa</h2>
      <p className="text-gray-600 mb-4">
        Latihan Dual UI dengan CSS Media Query. Jika 1024px atau lebih maka tampilan memakai tag table, jika tidak maka UI memakai grid system Tailwind.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border shadow-lg rounded-lg bg-white">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">NIM</th>
              <th className="border border-gray-300 px-4 py-2">Nama</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Prodi</th>
              <th className="border border-gray-300 px-4 py-2">Kelas</th>
              <th className="border border-gray-300 px-4 py-2">Semester</th>
              <th className="border border-gray-300 px-4 py-2">Alamat</th>
              <th className="border border-gray-300 px-4 py-2">Hobby</th>
              <th className="border border-gray-300 px-4 py-2">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="border border-gray-300 px-4 py-2 text-center text-green-600">{student.no}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.nim}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.nama}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.gender}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.prodi}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.kelas}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 text-center">{student.semester}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.alamat}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.hobby}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{student.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
