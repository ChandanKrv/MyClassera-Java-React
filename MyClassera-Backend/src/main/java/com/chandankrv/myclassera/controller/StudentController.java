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
public class StudentController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private SubjectService subjectService;

    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @PostMapping("/addStudents")
    public List<Student> addStudent(@RequestBody List<Student> students) {
        return studentService.addStudents(students);
    }

    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @GetMapping({"/students", "/"})
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student s) {
        return studentService.updateStudent(s);
    }

    @DeleteMapping("/student/{id}")
    public String deleteStudent(@PathVariable int id) {
        return studentService.deleteStudentById(id);
    }

    @PostMapping("/{studentId}/enroll")
    public Student enrollStudentInSubjects(@PathVariable int studentId, @RequestBody Set<Integer> subjectIds) {
        return studentService.enrollStudentInSubjects(studentId, subjectIds);
    }

    @GetMapping("/{id}/subjects")
    public Set<Subject> getSubjectsByStudentId(@PathVariable int id) {
        return studentService.getSubjectsByStudentId(id);
    }

}

