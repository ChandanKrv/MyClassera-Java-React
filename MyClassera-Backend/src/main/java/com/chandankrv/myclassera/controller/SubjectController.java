package com.chandankrv.myclassera.controller;

import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import com.chandankrv.myclassera.service.StudentService;
import com.chandankrv.myclassera.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Controller for managing subject-related operations
 */

@RestController
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @Autowired
    private StudentService studentService;

    @GetMapping("/all")
    public ResponseEntity<Page<Subject>> getSubjects(Pageable pageable) {
        Page<Subject> subjects = subjectService.getSubjects(pageable);
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subject> getSubjectById(@PathVariable int id) {
        Subject subject = subjectService.getSubjectById(id);
        if (subject != null) {
            return ResponseEntity.ok(subject);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/add")
    public ResponseEntity<Subject> addSubject(@RequestBody Subject subject) {
        Subject newSubject = subjectService.addSubject(subject);
        return ResponseEntity.status(HttpStatus.CREATED).body(newSubject);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/addMultiple")
    public ResponseEntity<List<Subject>> addSubjects(@RequestBody List<Subject> subjects) {
        List<Subject> newSubjects = subjectService.addSubjects(subjects);
        return ResponseEntity.status(HttpStatus.CREATED).body(newSubjects);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Subject> updateSubject(@RequestBody Subject subject) {
        Subject updatedSubject = subjectService.updateSubject(subject);
        return ResponseEntity.ok(updatedSubject);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSubject(@PathVariable int id) {
        subjectService.deleteSubjectById(id);
        return ResponseEntity.ok("Subject deleted successfully with ID: " + id);
    }

    @GetMapping("/{id}/students")
    public ResponseEntity<Set<Student>> getStudentsBySubjectId(@PathVariable int id) {
        Set<Student> students = subjectService.getStudentsBySubjectId(id);
        return ResponseEntity.ok(students);
    }
}
