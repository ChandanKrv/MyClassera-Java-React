package com.chandankrv.myclassera.controller;

import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import com.chandankrv.myclassera.service.StudentService;
import com.chandankrv.myclassera.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@RestController
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @Autowired
    private StudentService studentService;

    @PostMapping("/addSubject")
    public Subject addSubject(@RequestBody Subject subject) {
        return subjectService.addSubject(subject);
    }

    @PostMapping("/addSubjects")
    public List<Subject> addSubject(@RequestBody List<Subject> subjects) {
        return subjectService.addSubjects(subjects);
    }

    @GetMapping("/subject/{id}")
    public Subject getSubjectById(@PathVariable int id) {
        return subjectService.getSubjectById(id);
    }

    @GetMapping("/subjects")
    public List<Subject> getSubjects() {
        return subjectService.getSubjects();
    }

    @PutMapping("/updateSubject")
    public Subject updateSubject(@RequestBody Subject s) {
        return subjectService.updateSubject(s);
    }

    @DeleteMapping("/subject/{id}")
    public String deleteSubject(@PathVariable int id) {
        return subjectService.deleteSubjectById(id);
    }


    @GetMapping("/{id}/students")
    public Set<Student> getStudentsBySubjectId(@PathVariable int id) {
        return subjectService.getStudentsBySubjectId(id);
    }
}
