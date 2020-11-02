const SEARCH_FIELD = '[name="q"]';

class SearchPage {
  static search(keyword: any) {
    cy.get(SEARCH_FIELD).type(keyword).type("{enter}");
  }
}

export default SearchPage;
