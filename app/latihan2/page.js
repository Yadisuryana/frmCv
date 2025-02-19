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
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="max-w-[360px] w-full p-4">
        <h1 className="text-2xl font-bold text-center text-black">Data Mahasiswa</h1>
        <p className="text-center text-black text-sm mb-4">
          Latihan Dual UI dengan CSS Media Query. Tampilan mobile
        </p>
        <div className="grid gap-4">
          {students.map((student) => (
            <div key={student.id} className="border p-4 rounded-lg shadow-md bg-white text-black">
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
      </div>
    </div>
  );
};

export default StudentTable;
