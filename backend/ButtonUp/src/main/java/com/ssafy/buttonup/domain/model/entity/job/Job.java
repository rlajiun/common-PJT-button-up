package com.ssafy.buttonup.domain.model.entity.job;

import com.ssafy.buttonup.domain.model.dto.job.response.JobResponse;
import com.ssafy.buttonup.domain.model.entity.user.Parent;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

/**
 * 직업 엔티티
 *
 * @author Jiun Kim
 * created on 2022-02-04
 */
@Entity
@Table(name = "jobs")
@Getter
@DynamicInsert
@NoArgsConstructor
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_seq")
    private Long seq;

    @Enumerated(EnumType.STRING)
    @Column(name = "job_pay_term")
    private PayTerm payTerm;

    @Column(name = "job_pay")
    private int pay;

    @Column(name = "job_name")
    private String name;

    @Column(name = "job_image_path")
    private String jobImagePath;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_parent_seq")
    private Parent parent;

    @Builder
    public Job(PayTerm payTerm, int pay, String name, String jobImagePath, Parent parent) {
        this.payTerm = payTerm;
        this.pay = pay;
        this.name = name;
        this.jobImagePath = jobImagePath;
        this.parent = parent;
    }

    /**
     * Job Entity를 Response dto로 바꿔주는 메서드
     *
     * @return JobResponse
     */
    public JobResponse ToResponse() {
        return JobResponse.builder()
                .seq(seq)
                .payTerm(payTerm)
                .pay(pay)
                .name(name)
//                .jobImagePath(checkImageIsNull(jobImage))
                .jobImagePath(jobImagePath)
                .build();
    }

    /**
     * 이미지 null 여부 체크 메서드
     *
     * @param jobImage 이미지 엔티티
     * @return 이미지 주소
     */
    private static String checkImageIsNull(JobImage jobImage) {
        return jobImage != null ? jobImage.getPath() : null;
    }
}