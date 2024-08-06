package com.chandankrv.myclassera.service;

import com.chandankrv.myclassera.exception.AlreadyEnrolledException;
import com.chandankrv.myclassera.exception.StudentNotFoundException;
import com.chandankrv.myclassera.exception.SubjectNotFoundException;
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
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException("Student not found with ID: " + id));
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
            throw new StudentNotFoundException("Student not found with ID: " + s.getId());
        }
        return old;
    }

    public String deleteStudentById(int id) {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException("Student not found with ID: " + id);
        }
        studentRepository.deleteById(id);
        return "Student data deleted successfully";
    }

    @Transactional
    public Student enrollStudentInSubjects(int studentId, Set<Integer> subjectIds) {
        Student student = getStudentById(studentId);
        Set<Subject> subjects = new HashSet<>();
        for (Integer subjectId : subjectIds) {
            Subject subject = subjectRepository.findById(subjectId)
                    .orElseThrow(() -> new SubjectNotFoundException("Subject not found with ID: " + subjectId));
            if (student.getSubjects().contains(subject)) {
                throw new AlreadyEnrolledException("Student is already enrolled in subject with ID: " + subjectId);
            }
            subjects.add(subject);
        }
        student.getSubjects().addAll(subjects);
        return studentRepository.save(student);
    }

    public Set<Subject> getSubjectsByStudentId(int id) {
        return getStudentById(id).getSubjects();
    }
}
