import React from "react";

const students = [
  { id: 1, nim: "220101", nama: "Ahmad", gender: "Laki-laki", prodi: "Informatika", kelas: "TI-1A", semester: 2, alamat: "Jakarta", hobby: "Coding", citacita: "Software Engineer" },
  { id: 2, nim: "220102", nama: "Budi", gender: "Laki-laki", prodi: "Sistem Informasi", kelas: "SI-2B", semester: 4, alamat: "Bandung", hobby: "Gaming", citacita: "Game Developer" },
  { id: 3, nim: "220103", nama: "Cici", gender: "Perempuan", prodi: "Teknik Elektro", kelas: "TE-1C", semester: 2, alamat: "Surabaya", hobby: "Membaca", citacita: "AI Researcher" },
  { id: 4, nim: "220104", nama: "Dini", gender: "Perempuan", prodi: "Manajemen", kelas: "MN-3D", semester: 6, alamat: "Yogyakarta", hobby: "Menulis", citacita: "Entrepreneur" },
  { id: 5, nim: "220105", nama: "Erwin", gender: "Laki-laki", prodi: "Akuntansi", kelas: "AK-4E", semester: 8, alamat: "Medan", hobby: "Olahraga", citacita: "Akuntan Publik" },
];

const StudentTable = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black p-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-4">Data Mahasiswa</h1>
        <p className="text-center text-lg mb-6">
          Latihan Dual UI: Tabel untuk desktop (≥1024px), Grid untuk mobile.
        </p>

        {/* Mobile Grid (< 1024px) */}
        <div className="block lg:hidden grid gap-4">
          {students.map((student) => (
            <div key={student.id} className="border border-black p-4 rounded-lg shadow-md bg-white">
              <p><strong>No:</strong> {student.id}</p>
              <p><strong>NIM:</strong> {student.nim}</p>
              <p><strong>Nama:</strong> {student.nama}</p>
              <p><strong>Gender:</strong> {student.gender}</p>
              <p><strong>Prodi:</strong> {student.prodi}</p>
              <p><strong>Kelas:</strong> {student.kelas}</p>
              <p><strong>Semester:</strong> {student.semester}</p>
              <p><strong>Alamat:</strong> {student.alamat}</p>
              <p><strong>Hobby:</strong> {student.hobby}</p>
              <p><strong>Cita-cita:</strong> {student.citacita}</p>
            </div>
          ))}
        </div>

        {/* Desktop Table (≥ 1024px) */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border border-black shadow-lg">
            <thead className="bg-black text-white">
              <tr>
                <th className="border border-white p-2">No</th>
                <th className="border border-white p-2">NIM</th>
                <th className="border border-white p-2">Nama</th>
                <th className="border border-white p-2">Gender</th>
                <th className="border border-white p-2">Prodi</th>
                <th className="border border-white p-2">Kelas</th>
                <th className="border border-white p-2">Semester</th>
                <th className="border border-white p-2">Alamat</th>
                <th className="border border-white p-2">Hobby</th>
                <th className="border border-white p-2">Cita-cita</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border border-black text-center">
                  <td className="border border-black p-2">{student.id}</td>
                  <td className="border border-black p-2">{student.nim}</td>
                  <td className="border border-black p-2">{student.nama}</td>
                  <td className="border border-black p-2">{student.gender}</td>
                  <td className="border border-black p-2">{student.prodi}</td>
                  <td className="border border-black p-2">{student.kelas}</td>
                  <td className="border border-black p-2">{student.semester}</td>
                  <td className="border border-black p-2">{student.alamat}</td>
                  <td className="border border-black p-2">{student.hobby}</td>
                  <td className="border border-black p-2">{student.citacita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
