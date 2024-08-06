package com.chandankrv.myclassera.service;

import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import com.chandankrv.myclassera.repository.StudentRepository;
import com.chandankrv.myclassera.repository.SubjectRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private SubjectRepository subjectRepository;

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

    public Student updateStudent(Student s) {
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

    public String deleteStudentById(int id) {
        studentRepository.deleteById(id);
        return "Student data deleted successfully";
    }


    @Transactional
    public Student enrollStudentInSubjects(int studentId, Set<Integer> subjectIds) {
        Student student = getStudentById(studentId);
        Set<Subject> subjects = new HashSet<>(subjectRepository.findAllById(subjectIds));
        student.setSubjects(subjects);
        return studentRepository.save(student);
    }

    public Set<Subject> getSubjectsByStudentId(int id) {
        return getStudentById(id).getSubjects();
    }

}

