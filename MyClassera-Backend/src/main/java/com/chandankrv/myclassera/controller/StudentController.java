package com.chandankrv.myclassera.controller;

import com.chandankrv.myclassera.exception.AlreadyEnrolledException;
import com.chandankrv.myclassera.exception.StudentNotFoundException;
import com.chandankrv.myclassera.exception.SubjectNotFoundException;
import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import com.chandankrv.myclassera.service.StudentService;
import com.chandankrv.myclassera.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Controller for managing student-related operations
 */

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private SubjectService subjectService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<List<Student>> getStudents() {
        List<Student> students = studentService.getStudents();
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
        Student student = studentService.getStudentById(id);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            throw new StudentNotFoundException("Student not found with ID: " + id);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student newStudent = studentService.addStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(newStudent);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/addMultiple")
    public ResponseEntity<List<Student>> addStudents(@RequestBody List<Student> students) {
        List<Student> newStudents = studentService.addStudents(students);
        return ResponseEntity.status(HttpStatus.CREATED).body(newStudents);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
        Student updatedStudent = studentService.updateStudent(student);
        return ResponseEntity.ok(updatedStudent);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable int id) {
        studentService.deleteStudentById(id);
        return ResponseEntity.ok("Student deleted successfully with ID: " + id);
    }

    @GetMapping("/{id}/subjects")
    public ResponseEntity<Set<Subject>> getSubjectsByStudentId(@PathVariable int id) {
        Set<Subject> subjects = studentService.getSubjectsByStudentId(id);
        return ResponseEntity.ok(subjects);
    }

    @PostMapping("/{studentId}/enroll")
    public ResponseEntity<?> enrollStudentInSubjects(@PathVariable int studentId, @RequestBody Set<Integer> subjectIds) {
        try {
            Student updatedStudent = studentService.enrollStudentInSubjects(studentId, subjectIds);
            return ResponseEntity.ok(updatedStudent);
        } catch (StudentNotFoundException | SubjectNotFoundException | AlreadyEnrolledException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }
}
