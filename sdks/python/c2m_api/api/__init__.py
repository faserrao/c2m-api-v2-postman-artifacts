# flake8: noqa

if __import__("typing").TYPE_CHECKING:
    # import apis into api package
    from c2m_api.api.auth_api import AuthApi
    from c2m_api.api.jobs_api import JobsApi
    from c2m_api.api.most_common_api import MostCommonApi
    
else:
    from lazy_imports import LazyModule, as_package, load

    load(
        LazyModule(
            *as_package(__file__),
            """# import apis into api package
from c2m_api.api.auth_api import AuthApi
from c2m_api.api.jobs_api import JobsApi
from c2m_api.api.most_common_api import MostCommonApi

""",
            name=__name__,
            doc=__doc__,
        )
    )
