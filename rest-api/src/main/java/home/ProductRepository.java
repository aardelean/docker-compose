package home;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

/**
 * Created by alex on 26.03.16.
 */
@RestResource(path = "/products")
public interface ProductRepository extends PagingAndSortingRepository<Product, String>{
}
