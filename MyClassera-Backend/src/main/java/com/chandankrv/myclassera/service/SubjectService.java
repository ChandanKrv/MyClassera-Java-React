package com.chandankrv.myclassera.service;

import com.chandankrv.myclassera.exception.StudentNotFoundException;
import com.chandankrv.myclassera.exception.SubjectNotFoundException;
import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import com.chandankrv.myclassera.repository.StudentRepository;
import com.chandankrv.myclassera.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private StudentRepository studentRepository;


    public Subject addSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    public List<Subject> addSubjects(List<Subject> subjects) {
        return subjectRepository.saveAll(subjects);
    }

    public Subject getSubjectById(int id) {
        return subjectRepository.findById(id).orElse(null);
    }

    public List<Subject> getSubjects() {
        return subjectRepository.findAll();
    }


    public Subject updateSubject(Subject s) {
        Subject old;
        Optional<Subject> op = subjectRepository.findById(s.getId());
        if (op.isPresent()) {
            old = op.get();
            old.setName(s.getName());
            old.setDescription(s.getDescription());

            subjectRepository.save(old);
        } else {
            return new Subject();
        }
        return old;
    }

    public String deleteSubjectById(int id) {
        subjectRepository.deleteById(id);
        return "Subject deleted successfully";
    }

    public Set<Student> getStudentsBySubjectId(int id) {
        // Check if student exists
        if (!subjectRepository.existsById(id)) {
            throw new SubjectNotFoundException("Subject not found with ID: " + id);
        }
        return subjectRepository.findStudentsBySubjectId(id);
    }

}
