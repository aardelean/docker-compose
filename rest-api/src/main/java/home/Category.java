package home;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * Created by alex on 26.03.16.
 */
@Entity
@Getter @Setter @NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE, mappedBy = "category")
//    private List<Product> products;
}
