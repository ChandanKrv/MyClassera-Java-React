package com.chandankrv.myclassera.service;

import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> addStudents(List<Student> students) {
        return studentRepository.saveAll(students);
    }

    public Student getStudentById(int id) {
        return studentRepository.findById(id).orElse(null);
    }

    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public Student editStudent(Student s) {
        Student old;
        Optional<Student> op = studentRepository.findById(s.getId());
        if (op.isPresent()) {
            old = op.get();
            old.setName(s.getName());
            old.setAddress(s.getAddress());

            studentRepository.save(old);
        } else {
            return new Student();
        }
        return old;
    }

    public String deleteStudent(int id) {
        studentRepository.deleteById(id);
        return "Student data deleted successfully";
    }

}

